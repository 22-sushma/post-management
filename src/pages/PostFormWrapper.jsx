import { useParams, Link } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function PostFormWrapper({ posts = [], onSubmit }) {
  const { id } = useParams();

  if (!posts || posts.length === 0) return <p className="p-6">Loading...</p>;

  const post = id ? posts.find((p) => p.id === id) : null;

  if (id && !post)
    return <p className="p-6 text-red-500">Post not found. <Link to="/">Go back</Link></p>;

  return <PostForm post={post} onSubmit={onSubmit} />;
}
