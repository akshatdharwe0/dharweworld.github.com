export default function ChatArea({ messages }) {
  return (
    <section className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`max-w-xl px-4 py-3 rounded-xl text-sm ${
            msg.role === "user"
              ? "ml-auto bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </section>
  );
}
