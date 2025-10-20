import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white shadow px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          Post Management
        </Link>
        <nav className="flex gap-2">
          <Link to="/" className="px-3 py-1 rounded hover:bg-gray-100">
            Posts
          </Link>
          <Link
            to="/posts/new"
            className="px-3 py-1 rounded bg-blue-600 text-white"
          >
            New Post
          </Link>
        </nav>
      </div>
    </header>
  );
}
