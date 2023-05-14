import Markdown from "react-markdown";

type Props = {
  message: string;
  owner: string;
};

function ChatBubble(props: Props) {
  const { message, owner } = props;
  const isUserMessage = owner == "user";
  const bubbleClass = isUserMessage
    ? "bg-lime-500 text-right"
    : "bg-gray-800 flex-start";

  return (
    <div
      className={`flex ${
        isUserMessage ? "justify-end ml-80" : "justify-start mr-80"
      }`}
    >
      <div
        className={`text-white rounded-lg px-5 py-2 space-y-1  ${bubbleClass}`}
      >
        <span
          className={`text-sm ${
            isUserMessage ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {isUserMessage ? "You" : "Chat GPT"}
        </span>
        <Markdown>{message}</Markdown>
      </div>
    </div>
  );
}

export default ChatBubble;
