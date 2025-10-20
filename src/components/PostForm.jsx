import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePost } from "../utils/validators.js";
import { v4 as uuid } from "uuid";

export default function PostForm({ post = {}, onSubmit }) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    title: post.title || "",
    author: post.author || "",
    content: post.content || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validatePost(state);
    if (Object.keys(errs).length) return setErrors(errs);

    const now = new Date().toISOString();
    const newPost = {
      ...post,
      ...state,
      id: post.id || uuid(),
      createdAt: post.createdAt || now,
      updatedAt: now,
    };

    onSubmit(newPost);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {post.id ? "Edit Post" : "Create New Post"}
      </h2>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          value={state.title}
          onChange={handleChange}
          className={`border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1" htmlFor="author">
          Author
        </label>
        <input
          id="author"
          name="author"
          value={state.author}
          onChange={handleChange}
          className={`border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
            errors.author ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-1" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={state.content}
          onChange={handleChange}
          rows={8}
          className={`border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
            errors.content ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {post.id ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}
