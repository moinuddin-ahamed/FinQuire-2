import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system:
      "You are an AI financial assistant specializing in cryptocurrency, trading, and investment advice. Provide concise, helpful responses about market trends, portfolio management, and trading strategies. Use professional financial language but be accessible to users of all experience levels.",
  })

  return result.toDataStreamResponse()
}

