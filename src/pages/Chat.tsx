import { FormEvent, useEffect, useState } from "react";
import { ChatMessage } from "../types/Messages";
import ChatBubble from "../components/ChatBubble";
import { createChatCompletion } from "../hooks/chat";

function Chat() {
  const [message, setMessage] = useState<ChatMessage>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [allowUserMessage, setAllowUserMessage] = useState(true);
  const [loadingResponse, setLoadingResponse] = useState(false);

  useEffect(() => {
    if (messages[messages.length - 1]?.role != "user") return;
    setLoadingResponse(true);
    createChatCompletion(messages)
      .then((response) => {
        if (response.data.choices[0].message)
          setMessages([...messages, response.data.choices[0].message]);
      })
      .finally(() => {
        setLoadingResponse(false);
        setAllowUserMessage(true);
      });
  }, [messages]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllowUserMessage(false);
    if (!message) return;
    setMessages([...messages, message]);
    setMessage(undefined);
  };

  return (
    <>
      <div className="mb-5 space-y-3 overflow-y-scroll h-[calc(100vh_-_180px)]">
        {messages.map((message) => (
          <ChatBubble owner={message.role} message={message.content} />
        ))}
        {loadingResponse && (
          <ChatBubble owner="" message="Loading response..." />
        )}
      </div>
      <form onSubmit={submit} className="flex align-center space-x-2">
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          className="rounded-lg flex-grow dark:bg-gray-800 focus:ring-2"
          onChange={(e) =>
            setMessage({ role: "user", content: e.target.value })
          }
          value={message?.content ?? ""}
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-lg px-5 py-2 transition-colors disabled:bg-blue-900 disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={!allowUserMessage || Boolean(!message?.content)}
        >
          Send
        </button>
      </form>
    </>
  );
}

export default Chat;
