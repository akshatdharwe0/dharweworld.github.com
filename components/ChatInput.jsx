import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="border-t bg-white px-6 py-3">
      <div className="max-w-2xl mx-auto flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask Dharwe AI..."
          className="flex-1 border rounded-lg px-4 py-2 text-sm"
        />
        <button
          onClick={send}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
