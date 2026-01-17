import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import ChatInput from "./components/ChatInput";

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Welcome to Dharwe-World 👋" },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages([...messages, { role: "user", text }]);
  };

  return (
    <div className="flex h-screen bg-[#f7f7f8]">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 flex flex-col">
        <Header title={active} />
        <ChatArea messages={messages} />
        <ChatInput onSend={sendMessage} />
      </main>
    </div>
  );
}
