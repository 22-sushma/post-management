import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(onClose, 2500);
    return () => clearTimeout(id);
  }, [message, onClose]);

  if (!message) return null;
  return (
    <div className="fixed right-4 bottom-4 bg-black text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
}
