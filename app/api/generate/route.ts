import { NextResponse } from "next/server"

type OpenRouterImageLike = {
  url?: string
  b64_json?: string
}

type OpenRouterContentPart = {
  type?: string
  text?: string
  image_url?: OpenRouterImageLike | string
  image?: OpenRouterImageLike | string
  url?: string
  data?: string
  b64_json?: string
}

type OpenRouterMessage = {
  content?: OpenRouterContentPart[] | string
  image_url?: OpenRouterImageLike | string
  images?: OpenRouterImageLike[] | string[]
}

const toDataUrlFromB64 = (value?: string) => {
  if (!value) return undefined
  if (value.startsWith("data:image")) return value
  return `data:image/png;base64,${value}`
}

const resolveImageValue = (value?: OpenRouterImageLike | string) => {
  if (!value) return undefined
  if (typeof value === "string") return value
  return value.url || toDataUrlFromB64(value.b64_json)
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing OPENROUTER_API_KEY in .env.local." },
      { status: 500 },
    )
  }

  const body = await request.json().catch(() => null)
  const prompt = body?.prompt?.trim()
  const image = body?.image

  if (!prompt || !image) {
    return NextResponse.json(
      { error: "Prompt and image are required." },
      { status: 400 },
    )
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash-image",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: image } },
          ],
        },
      ],
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json(
      { error: `OpenRouter error: ${errorText}` },
      { status: response.status },
    )
  }

  const data = await response.json()
  const message: OpenRouterMessage | undefined = data?.choices?.[0]?.message

  let imageUrl: string | undefined

  if (Array.isArray(message?.content)) {
    const imagePart = message.content.find(
      (part) =>
        part?.type === "image_url" ||
        part?.type === "image" ||
        part?.image_url ||
        part?.image ||
        part?.url ||
        part?.data ||
        part?.b64_json,
    )
    const imageValue =
      resolveImageValue(imagePart?.image_url) ||
      resolveImageValue(imagePart?.image) ||
      imagePart?.url ||
      imagePart?.data ||
      toDataUrlFromB64(imagePart?.b64_json)
    if (imageValue) imageUrl = imageValue
  }

  if (!imageUrl && message?.image_url) {
    imageUrl = resolveImageValue(message.image_url)
  }

  if (!imageUrl && Array.isArray(message?.images) && message?.images.length > 0) {
    const firstImage = message.images[0] as OpenRouterImageLike | string | undefined
    imageUrl = resolveImageValue(firstImage)
    if (!imageUrl && typeof firstImage === "object" && firstImage) {
      const possibleValue = (firstImage as OpenRouterContentPart).image_url
      imageUrl = resolveImageValue(possibleValue)
    }
  }

  if (!imageUrl && typeof message?.content === "string") {
    if (message.content.startsWith("data:image")) {
      imageUrl = message.content
    }
  }

  if (!imageUrl && Array.isArray(data?.images) && data.images.length > 0) {
    imageUrl = resolveImageValue(data.images[0])
  }

  if (!imageUrl) {
    return NextResponse.json(
      {
        error: "No image returned from OpenRouter.",
        details: {
          message: data?.choices?.[0]?.message,
          images: data?.images,
          choice: data?.choices?.[0],
        },
      },
      { status: 502 },
    )
  }

  return NextResponse.json({ imageUrl })
}
