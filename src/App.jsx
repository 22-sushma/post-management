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

  const handleCreate = (newPost) => setPosts([newPost, ...posts]);

  const handleEdit = (updatedPost) =>
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));

  const handleDelete = (id) => setPosts(posts.filter((p) => p.id !== id));

  return (
    <Routes>
      <Route path="/" element={<PostList posts={posts} onDelete={handleDelete} />} />
      <Route path="/posts/new" element={<PostCreate onCreate={handleCreate} />} />
      <Route path="/posts/:id" element={<PostView posts={posts} />} />
      <Route path="/posts/:id/edit" element={<PostFormWrapper posts={posts} onSubmit={handleEdit} />} />
    </Routes>
  );
}
