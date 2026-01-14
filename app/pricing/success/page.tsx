import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Your Nano Banana purchase is confirmed.",
}

export default function PricingSuccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="px-4 py-20">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-3xl border border-border/60 bg-card px-6 py-16 text-center shadow-sm">
          <div className="text-4xl font-semibold">Payment successful</div>
          <p className="mt-4 text-sm text-muted-foreground">
            Thanks for supporting Nano Banana. Your credits are on the way. A
            confirmation email should arrive shortly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/">Return to home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">Back to pricing</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
