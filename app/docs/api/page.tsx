import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "API Documentation",
  description: "Nano Banana API endpoints and usage examples.",
}

const codeBlockClass =
  "mt-3 rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs text-slate-100 overflow-x-auto"

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-16 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            API Documentation
          </h1>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            Use the Nano Banana API to generate edits programmatically or create
            checkout sessions with Creem.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Base URL
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Use your deployed domain. Example:
            </p>
            <pre className={codeBlockClass}>https://your-domain.com</pre>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              POST /api/generate
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Generate or edit an image using a text prompt and a base64 image.
            </p>
            <pre className={codeBlockClass}>
{`{
  "prompt": "Replace the background with a snowy mountain",
  "image": "data:image/png;base64,..."
}`}
            </pre>
            <p className="mt-3 text-sm text-slate-600">Response:</p>
            <pre className={codeBlockClass}>
{`{
  "imageUrl": "data:image/png;base64,..."
}`}
            </pre>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              POST /api/creem/checkout
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Create a Creem checkout session for a pricing plan.
            </p>
            <pre className={codeBlockClass}>
{`{
  "planId": "pro-yearly"
}`}
            </pre>
            <p className="mt-3 text-sm text-slate-600">Response:</p>
            <pre className={codeBlockClass}>
{`{
  "url": "https://checkout.creem.io/..."
}`}
            </pre>
            <p className="mt-3 text-sm text-slate-600">
              Supported plan IDs are listed on the Pricing page.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/quick-start">Quick Start</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
