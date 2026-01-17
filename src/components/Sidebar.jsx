export default function Sidebar({ active, setActive }) {
  const menu = [
    "Dashboard",
    "AI Tools",
    "Products",
    "Plans",
    "Downloads",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="px-4 py-3 font-semibold">Dharwe-World</div>

      <nav className="flex-1 px-2 space-y-1">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
              active === item ? "bg-gray-100" : "text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="px-4 py-3 text-xs text-gray-500 border-t">
        Akshat Dharwe · Student
      </div>
    </aside>
  );
}
