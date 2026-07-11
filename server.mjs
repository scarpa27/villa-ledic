import { createReadStream, existsSync } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = resolve(fileURLToPath(new URL(".", import.meta.url)));
const siteDirectory = resolve(process.env.SITE_DIR || join(projectDirectory, "build"));
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function safeFilePath(pathname) {
  const candidate = resolve(siteDirectory, `.${pathname}`);
  const relativePath = relative(siteDirectory, candidate);
  const isInsideSite = relativePath && !relativePath.startsWith("..");

  return isInsideSite || candidate === siteDirectory ? candidate : null;
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function sendFile(response, filePath) {
  response.writeHead(200, {
    "Content-Type": contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(filePath).pipe(response);
}

const indexFile = join(siteDirectory, "index.html");

if (!existsSync(indexFile)) {
  console.error("No production build found. Run `npm run build` first.");
  process.exit(1);
}

function normaliseBasePath(value) {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "/";

  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

function requestPathWithinApp(pathname, basePath) {
  if (basePath === "/") return pathname;

  const basePathWithoutTrailingSlash = basePath.slice(0, -1);
  if (pathname === basePath || pathname === basePathWithoutTrailingSlash) return "/";
  if (!pathname.startsWith(basePath)) return null;

  return `/${pathname.slice(basePath.length)}`;
}

const indexHtml = await readFile(indexFile, "utf8");
const assetPathMatch = indexHtml.match(/src="([^\"]*?)assets\/app\.js"/);
const basePath = normaliseBasePath(assetPathMatch?.[1] || "/");

createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(requestUrl.pathname);

  if (basePath !== "/" && pathname === "/") {
    response.writeHead(302, { Location: basePath });
    response.end();
    return;
  }

  const appPathname = requestPathWithinApp(pathname, basePath);
  if (!appPathname) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const requestedFile = safeFilePath(appPathname);

  if (requestedFile && (await isFile(requestedFile))) {
    sendFile(response, requestedFile);
    return;
  }

  if (extname(appPathname)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  sendFile(response, indexFile);
})
  .listen(port, host, () => {
    console.log(`Apartments Ledić is available at http://${host}:${port}${basePath}`);
  });
