import Replicate from "replicate";
import { ReplicateStream, StreamingTextResponse } from "ai";
export const runtime = "edge";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

if (!process.env.REPLICATE_API_TOKEN) {
  throw new Error(
    "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
  );
}

export async function POST(req) {
  const params = await req.json();

  const response = await runMixtral(params);

  // Convert the response into a friendly text-stream
  const stream = await ReplicateStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}

async function runMixtral({ prompt, maxTokens, temperature, topP }) {
  return await replicate.predictions.create({
    model: "mistralai/mixtral-8x7b-instruct-v0.1",
    stream: true,
    input: {
      prompt: `${prompt}`,
      prompt_template: "{prompt}",
      max_new_tokens: maxTokens,
      temperature: temperature,
      repetition_penalty: 1,
      top_p: topP,
    },
  });
}
