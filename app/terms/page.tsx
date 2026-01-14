import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms that govern use of Nano Banana.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto w-full max-w-4xl px-4 pb-20 pt-16 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: March 1, 2025
          </p>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            By using Nano Banana, you agree to these terms. Please read them
            carefully.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Use of the Service
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              You may use the service for lawful purposes only. You are
              responsible for ensuring you have the rights to any content you
              upload.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Accounts & Billing
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Subscription access is billed through our payment provider. You
              are responsible for maintaining accurate billing information.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Intellectual Property
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We retain all rights to the Nano Banana platform. You retain
              rights to your original content and receive a license to use
              generated outputs for your projects.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Service Availability
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We may modify or discontinue features to improve the service.
              Scheduled maintenance and unexpected downtime may occur.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Limitation of Liability
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              The service is provided on an "as is" basis without warranties of
              any kind. We are not liable for indirect or consequential damages
              arising from use of the service.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Contact
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Questions about these terms? Email{" "}
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
