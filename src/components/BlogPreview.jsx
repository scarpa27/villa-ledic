import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { useBlogPosts } from "../hooks/useBlogPosts";

function BlogPreview() {
  const { posts, loading, error } = useBlogPosts(3);

  return (
    <section className="blog-preview">
      <div className="container">
        <SectionTitle title="Blog" />

        <h2 className="blog-heading">Travel inspiration from Krvavica</h2>

        <p className="blog-text">
          Helpful tips and local ideas for planning your stay on the
          Makarska Riviera.
        </p>

        {loading && <p className="blog-status">Loading latest posts…</p>}
        {error && (
          <p className="blog-status blog-status-error">
            The latest posts could not be loaded. Please try again later.
          </p>
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

        <Link to="/blog" className="btn btn-outline-secondary blog-preview-button">
          View all posts
        </Link>
      </div>
    </section>
  );
}

export default BlogPreview;
