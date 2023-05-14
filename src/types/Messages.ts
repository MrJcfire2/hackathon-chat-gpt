import {
  ChatCompletionRequestMessageRoleEnum,
  CreateImageRequestSizeEnum,
} from "openai";

export type ChatMessage = {
  role: ChatCompletionRequestMessageRoleEnum;
  content: string;
};

export type ImagePrompt = {
  prompt: string;
  n: number;
  size: CreateImageRequestSizeEnum;
};
