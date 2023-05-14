import { CreateImageRequest } from "openai";
import { openAi } from "../config/config";

export async function generateImage(request: CreateImageRequest) {
  var test = await openAi.createImage({
    prompt: request.prompt,
    n: request.n ?? 1,
    size: request.size ?? "256x256",
  });
  console.log(test);
  return test;
}
