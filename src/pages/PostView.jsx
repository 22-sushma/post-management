import { Link, useParams } from "react-router-dom";

export default function PostView({ posts = [] }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  // Post not found
  if (!post)
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 text-lg mb-4">Post not found.</p>
        <Link to="/" className="text-blue-600 hover:underline font-medium">
          Go back
        </Link>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-gray-600 text-sm">
          by <span className="font-medium">{post.author}</span>
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 text-lg mb-4">{post.content}</p>

        {/* Tags (safe) */}
        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Timestamps */}
        <div className="text-gray-500 text-sm mb-6">
          <p>Created: {new Date(post.createdAt).toLocaleString()}</p>
          <p>Updated: {new Date(post.updatedAt).toLocaleString()}</p>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow transition"
        >
          ← Back to List
        </Link>
      </div>
    </div>
  );
}
