import { useBlogPosts } from "../hooks/useBlogPosts";

function Blog() {
  const { posts, loading, error } = useBlogPosts(12);

  return (
    <div className="blog-page">
      <div className="container">
        <header className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Travel tips and local inspiration from Krvavica.
          </p>
        </header>

        {loading && <p className="blog-status">Loading posts…</p>}
        {error && (
          <p className="blog-status blog-status-error">
            Posts could not be loaded. Please try again later.
          </p>
        )}
        {!loading && !error && posts.length === 0 && (
          <p className="blog-status">There are no published posts yet.</p>
        )}

        <div className="row">
          {posts.map((post) => (
            <div className="col-12 col-md-6 col-lg-4" key={post.id}>
              <div className="blog-card">
                <span className="blog-card-category">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <p className="blog-card-date">{post.date}</p>
                {post.url && (
                  <a
                    href={post.url}
                    className="blog-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read article
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
