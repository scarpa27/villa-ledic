const apiUrl = process.env.WORDPRESS_API_URL?.replace(/\/+$/, "");
const authorId = process.env.WORDPRESS_AUTHOR_ID;

export const hasWordPressApi = Boolean(apiUrl);

function plainText(html = "") {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element.textContent?.trim() ?? "";
}

function formatDate(value) {
  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? ""
    : new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
}

function categoryName(post) {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  return terms.find((term) => term.taxonomy === "category")?.name ?? "Travel";
}

export async function getWordPressPosts(limit, signal) {
  if (!apiUrl) return [];

  const url = new URL(`${apiUrl}/posts`);
  url.searchParams.set("per_page", String(limit));
  url.searchParams.set("_embed", "1");
  url.searchParams.set("status", "publish");

  if (authorId) {
    url.searchParams.set("author", authorId);
  }

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`WordPress returned ${response.status}.`);
  }

  const posts = await response.json();

  return posts.map((post) => ({
    id: post.id,
    title: plainText(post.title?.rendered),
    excerpt: plainText(post.excerpt?.rendered),
    category: categoryName(post),
    date: formatDate(post.date),
    url: post.link,
  }));
}
