import { Link } from "react-router-dom";

export default function PostCard({ post, onDelete }) {
  return (
    <div className="border rounded p-4 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/posts/${post.id}`} className="text-lg font-semibold">
            {post.title}
          </Link>
          <div className="text-sm text-gray-500">
            by {post.author} • {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/posts/${post.id}/edit`}
            className="text-sm px-2 py-1 border rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(post.id)}
            className="text-sm px-2 py-1 border rounded text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700 excerpt">{post.content}</p>
      <div className="mt-2 flex gap-1">
        {post.tags?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
