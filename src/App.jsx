import React from "react";
import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { seedPosts } from "./data/seedPosts";
import PostList from "./pages/PostList";
import PostCreate from "./pages/PostCreate";
import PostFormWrapper from "./pages/PostFormWrapper";
import PostView from "./pages/PostView";

export default function App() {
  const [posts, setPosts] = useLocalStorage("posts", seedPosts);

  const handleEdit = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };

  const handleCreate = (newPost) => {
    setPosts([newPost, ...posts]); // newest on top
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <Routes>
      {/* List all posts */}
      <Route
        path="/"
        element={<PostList posts={posts} onDelete={handleDelete} />}
      />

      {/* Create new post */}
      <Route
        path="/posts/new"
        element={<PostCreate onSubmit={handleCreate} />}
      />

      {/* View post details */}
      <Route
        path="/posts/:id"
        element={<PostView posts={posts} />}
      />

      {/* Edit post */}
      <Route
        path="/posts/:id/edit"
        element={<PostFormWrapper posts={posts} onSubmit={handleEdit} />}
      />
    </Routes>
  );
}
