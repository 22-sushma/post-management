export default function Pagination({ total, perPage, currentPage, onPage }) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;
  return (
    <div className="flex gap-2">
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
