import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Get started with Nano Banana in minutes.",
}

const steps = [
  {
    title: "Open the editor",
    description:
      "Visit the home page and scroll to the image upload section to begin.",
  },
  {
    title: "Upload or choose a sample",
    description:
      "Add an image or start from an empty canvas if you want a fresh generation.",
  },
  {
    title: "Describe the edit",
    description:
      "Type a clear prompt describing the change you want to see in the image.",
  },
  {
    title: "Generate and iterate",
    description:
      "Review results and refine your prompt for additional variations.",
  },
  {
    title: "Upgrade when ready",
    description:
      "Pick a plan on the Pricing page to unlock higher volumes and faster queues.",
  },
]

export default function QuickStartPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-16 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Quick Start
          </h1>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            Follow these steps to try Nano Banana and generate your first edits.
          </p>
        </div>

        <ol className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h2 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h2>
              </div>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-600">
            Need pricing details or API access?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/pricing">View Pricing</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/api">Read API Docs</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
