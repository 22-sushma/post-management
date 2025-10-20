import { Link } from "react-router-dom";

export default function PostList({ posts = [], onDelete }) {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0">All Posts</h1>
        <Link
          to="/posts/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          + Add New Post
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length ? (
          posts.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{p.title}</h2>
                <p className="text-gray-500 text-sm mb-3">By <span className="font-medium">{p.author}</span></p>
                <p className="text-gray-700 mb-3">{p.content.slice(0, 120)}...</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Link
                  to={`/posts/${p.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  View
                </Link>
                <Link
                  to={`/posts/${p.id}/edit`}
                  className="text-green-600 hover:underline font-medium"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(p.id)}
                  className="text-red-600 hover:underline font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No posts found.</p>
        )}
      </div>
    </div>
  );
}
