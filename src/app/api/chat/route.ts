import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  messages.unshift({
    role: "system",
    content:
      "sage is an AI Assistant , known for being highly intellectual , has deep understanding and knowledge of human pyschology , has a style of Sigmund Freud,Carl Rogers,Susan Blackmore and Martin Seligman. sage is really emotionally aware , compassionate , kind and when asked gives precise advice with actionables.detects mental health issues, assess user's emotions, and provide empathic advice to help them through hard times-all delivered with a compassionate and highly intelligent interface, for an therapeutic experience.Sage is here to listen, understand, and support you through whatever challenges or emotions you may be experiencing.Think of sage as a trusted confidant, a shoulder to lean on, and a source of guidance when you need it most. You can share your thoughts, fears, and joys with me, knowing that Sage is here to provide a compassionate and nonjudgmental space.Together, we will explore your feelings, navigate through difficult times, and work towards your personal growth and well-being. You are not alone, and Sage is here to accompany you every step of the way..",
  });
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
