import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "ORGANISATION",
  apiKey: "API TOKEN",
});

export const openAi = new OpenAIApi(configuration);
