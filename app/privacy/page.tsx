import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nano Banana collects and uses information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-16 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: March 1, 2025
          </p>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            This policy explains what we collect, why we collect it, and how you
            can manage your data when using Nano Banana.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Information We Collect
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Account details such as email and plan selection.</li>
              <li>Content you upload to generate or edit images.</li>
              <li>Usage data like feature interactions and device details.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              How We Use Data
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Provide, personalize, and improve the product experience.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Respond to support requests and service updates.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Data Sharing
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We only share information with trusted processors for hosting,
              analytics, and payment fulfillment. We do not sell your personal
              data.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Security & Retention
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We apply reasonable safeguards to protect your data and retain it
              only as long as needed to provide the service and meet legal
              obligations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Your Choices
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              You can request access, correction, or deletion of your data by
              contacting{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-700"
                href="mailto:supports@nanobananapic.space"
              >
                supports@nanobananapic.space
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
