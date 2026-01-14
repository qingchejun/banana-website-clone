import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Nano Banana team.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto w-full max-w-3xl px-4 pb-20 pt-16 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
          <p className="mt-4 text-sm text-slate-600">
            For support or billing questions, email us at:
          </p>
          <a
            className="mt-4 inline-flex text-base font-semibold text-blue-600 hover:text-blue-700"
            href="mailto:supports@nanobananapic.space"
          >
            supports@nanobananapic.space
          </a>
          <p className="mt-3 text-xs text-slate-500">
            We aim to respond within one business day.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
