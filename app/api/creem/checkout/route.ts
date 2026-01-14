import { NextResponse } from "next/server"

const planToProductId: Record<string, string | undefined> = {
  "basic-yearly": process.env.CREEM_PRODUCT_BASIC_YEARLY,
  "pro-yearly": process.env.CREEM_PRODUCT_PRO_YEARLY,
  "studio-yearly": process.env.CREEM_PRODUCT_STUDIO_YEARLY,
  "basic-monthly": process.env.CREEM_PRODUCT_BASIC_MONTHLY,
  "pro-monthly": process.env.CREEM_PRODUCT_PRO_MONTHLY,
  "studio-monthly": process.env.CREEM_PRODUCT_STUDIO_MONTHLY,
  "pack-mini": process.env.CREEM_PRODUCT_PACK_MINI,
  "pack-creator": process.env.CREEM_PRODUCT_PACK_CREATOR,
  "pack-agency": process.env.CREEM_PRODUCT_PACK_AGENCY,
}

const resolveBaseUrl = () => {
  if (process.env.CREEM_BASE_URL) {
    return process.env.CREEM_BASE_URL
  }
  const env = process.env.CREEM_ENV?.toLowerCase()
  if (env === "test") {
    return "https://test-api.creem.io"
  }
  if (env === "live" || env === "prod" || env === "production") {
    return "https://api.creem.io"
  }
  return "https://api.creem.io"
}

const formatCreemError = (status: number, rawText: string) => {
  try {
    const parsed = JSON.parse(rawText) as {
      message?: string[] | string
      error?: string
    }
    const message = Array.isArray(parsed?.message)
      ? parsed?.message.join(", ")
      : parsed?.message

    if (message?.toLowerCase().includes("product not found")) {
      return "产品未找到。请确认该计划的 CREEM_PRODUCT_* 配置正确，并确保 CREEM_ENV=test 或 live 与 API Key/产品环境一致。"
    }
    if (status === 401 || status === 403) {
      return "Creem API Key 无效或没有权限，请检查 CREEM_API_KEY。"
    }
    if (message) {
      return `Creem 请求失败：${message}`
    }
    if (parsed?.error) {
      return `Creem 请求失败：${parsed.error}`
    }
  } catch {
    // ignore parse errors
  }

  if (rawText?.includes("Product not found")) {
    return "产品未找到。请确认该计划的 CREEM_PRODUCT_* 配置正确，并确保 CREEM_ENV=test 或 live 与 API Key/产品环境一致。"
  }

  return "Creem 请求失败，请稍后重试。"
}

export async function POST(request: Request) {
  const apiKey = process.env.CREEM_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing CREEM_API_KEY in .env.local." },
      { status: 500 },
    )
  }

  const body = await request.json().catch(() => null)
  const planId = body?.planId

  if (!planId || typeof planId !== "string") {
    return NextResponse.json({ error: "planId is required." }, { status: 400 })
  }

  const productId = planToProductId[planId]
  if (!productId) {
    return NextResponse.json(
      { error: "This plan is not configured yet." },
      { status: 400 },
    )
  }

  const origin =
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000"
  const successUrl = new URL("/pricing/success", origin).toString()

  const response = await fetch(`${resolveBaseUrl()}/v1/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      product_id: productId,
      success_url: successUrl,
      request_id: `plan_${planId}_${Date.now()}`,
      metadata: {
        plan_id: planId,
      },
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json(
      { error: formatCreemError(response.status, errorText) },
      { status: response.status },
    )
  }

  const data = await response.json().catch(() => null)
  const checkoutUrl = data?.checkout_url || data?.checkoutUrl

  if (!checkoutUrl) {
    return NextResponse.json(
      { error: "Creem did not return a checkout URL." },
      { status: 502 },
    )
  }

  return NextResponse.json({ url: checkoutUrl })
}
