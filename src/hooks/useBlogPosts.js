import { useEffect, useState } from "react";
import { blogPreviewPosts } from "../data/blogPreview";
import { getWordPressPosts, hasWordPressApi } from "../services/wordpress";

export function useBlogPosts(limit) {
  const [state, setState] = useState({
    posts: hasWordPressApi ? [] : blogPreviewPosts.slice(0, limit),
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!hasWordPressApi) {
      setState({
        posts: blogPreviewPosts.slice(0, limit),
        loading: false,
        error: null,
      });
      return undefined;
    }

    const controller = new AbortController();
    setState({ posts: [], loading: true, error: null });

    getWordPressPosts(limit, controller.signal)
      .then((posts) => setState({ posts, loading: false, error: null }))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState({ posts: [], loading: false, error });
        }
      });

    return () => controller.abort();
  }, [limit]);

  return state;
}
