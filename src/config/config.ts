import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-1jlzS5qwJHX7GpHy2RZB4StB",
  apiKey: "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",
});

export const openAi = new OpenAIApi(configuration);
