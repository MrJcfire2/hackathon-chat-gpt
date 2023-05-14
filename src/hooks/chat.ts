import { openAi } from "../config/config";
import { ChatMessage } from "../types/Messages";

export async function createChatCompletion(messages: ChatMessage[]) {
  return await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });
}
