import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const publicDirectory = join(projectDirectory, "public");
const buildDirectory = join(projectDirectory, "build");

function parseDotEnv(contents) {
  return Object.fromEntries(
    contents
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => line.replace(/^export\s+/, ""))
      .map((line) => {
        const separator = line.indexOf("=");
        if (separator === -1) return ["", ""];

        const key = line.slice(0, separator).trim();
        let value = line.slice(separator + 1).trim();

        if (
          value.length >= 2 &&
          ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'")))
        ) {
          value = value.slice(1, -1);
        }

        return [key, value];
      })
      .filter(([key]) => key),
  );
}

async function loadDotEnv() {
  try {
    return parseDotEnv(await readFile(join(projectDirectory, ".env"), "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

function normaliseBasePath(value) {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "/";

  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

function publicPath(basePath, filePath) {
  return `${basePath}${filePath.replace(/^\//, "")}`;
}

const dotEnv = await loadDotEnv();
const getValue = (name) => process.env[name] ?? dotEnv[name] ?? "";
const apiUrl = getValue("WORDPRESS_API_URL");
const authorId = getValue("WORDPRESS_AUTHOR_ID");
const basePath = normaliseBasePath(getValue("BASE_PATH"));
const assetPublicPath = publicPath(basePath, "assets");

await rm(buildDirectory, { recursive: true, force: true });
await mkdir(buildDirectory, { recursive: true });
await cp(publicDirectory, buildDirectory, { recursive: true });

await build({
  entryPoints: [join(projectDirectory, "src", "main.jsx")],
  outdir: join(buildDirectory, "assets"),
  bundle: true,
  entryNames: "app",
  assetNames: "[name]-[hash]",
  publicPath: assetPublicPath,
  format: "esm",
  jsx: "automatic",
  target: "es2020",
  minify: true,
  loader: {
    ".jpg": "file",
    ".png": "file",
    ".webp": "file",
  },
  define: {
    "process.env.WORDPRESS_API_URL": JSON.stringify(apiUrl),
    "process.env.WORDPRESS_AUTHOR_ID": JSON.stringify(authorId),
    "process.env.BASE_PATH": JSON.stringify(basePath),
  },
});

const sourceHtml = await readFile(join(projectDirectory, "index.html"), "utf8");
const appStylesheet = `    <link rel="stylesheet" href="${publicPath(basePath, "assets/app.css")}" />`;
const appScript = `    <script type="module" src="${publicPath(basePath, "assets/app.js")}"></script>`;

const outputHtml = sourceHtml
  .replace('href="/favicon.svg"', `href="${publicPath(basePath, "favicon.svg")}"`)
  .split('content="/opengraph.jpg"')
  .join(`content="${publicPath(basePath, "opengraph.jpg")}"`)
  .replace("  </head>", `${appStylesheet}\n  </head>`)
  .replace(/\s*<script type="module" src="\/src\/main\.jsx"><\/script>/, `\n${appScript}`);

await writeFile(join(buildDirectory, "index.html"), outputHtml);
console.log(`Built ${buildDirectory}`);
