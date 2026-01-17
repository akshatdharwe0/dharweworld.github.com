export default function Header({ title }) {
  return (
    <header className="h-12 border-b bg-white px-6 flex items-center text-sm font-medium">
      {title}
    </header>
  );
}
