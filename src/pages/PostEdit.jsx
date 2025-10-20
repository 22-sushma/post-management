import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validatePost } from "../utils/validators.js";

export default function PostEdit({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingPost = posts.find((p) => p.id === id);

  const [post, setPost] = useState(existingPost || {
    title: "",
    author: "",
    content: "",
  });
  const [errors, setErrors] = useState({});

  if (!existingPost) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold text-red-500">Post not found.</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validatePost(post);
    if (Object.keys(errs).length) return setErrors(errs);

    const updatedPost = {
      ...existingPost,
      title: post.title,
      author: post.author,
      content: post.content,
      updatedAt: new Date().toISOString(),
    };

    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
    navigate(`/posts/${id}`);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 p-6 border-b">
        <h2 className="text-3xl font-bold text-gray-900">Edit Post</h2>
        <p className="text-gray-600 mt-1">
          Update the details of your post below.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Title</label>
          <input
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Author</label>
          <input
            name="author"
            value={post.author}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter author name"
          />
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Content</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            rows={8}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your post content here..."
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
