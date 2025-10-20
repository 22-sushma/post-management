export const validatePost = (post) => {
  const errors = {};
  if (!post.title?.trim()) errors.title = "Title is required";
  if (!post.author?.trim()) errors.author = "Author is required";
  if (!post.content?.trim() || post.content.length < 10)
    errors.content = "Content must be at least 10 characters";
  return errors;
};
