import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PricingFaq } from "@/components/pricing/pricing-faq"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nano Banana Pricing",
  description:
    "Choose the plan that fits your workflow. Flexible subscriptions and one-time credit packs for every creator.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-8">
        <PricingPlans />
        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-6">
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-md">
              <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Ready to build your next campaign?
              </h3>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Start editing in seconds and scale your credits whenever you
                need more.
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                >
                  <Link href="/">Start Editing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <PricingFaq />
      </div>
      <Footer />
    </main>
  )
}
