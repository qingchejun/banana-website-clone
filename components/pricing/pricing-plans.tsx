"use client"

import { useState } from "react"
import { Check, Crown, Rocket, Sparkles, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BillingCycle = "annual" | "monthly"

type PlanFeature = {
  label: string
  included?: boolean
}

type Plan = {
  annualId: string
  monthlyId: string
  name: string
  description: string
  monthlyPrice: string
  annualPrice: string
  annualTotal: string
  annualOriginalTotal: string
  monthlyCredits: string
  annualCredits: string
  badge?: string
  highlight?: boolean
  icon: typeof Crown
  features: PlanFeature[]
}

type Pack = {
  id: string
  name: string
  description: string
  price: string
  credits: string
  badge?: string
  highlight?: boolean
  features: string[]
}

const plans: Plan[] = [
  {
    annualId: "basic-yearly",
    monthlyId: "basic-monthly",
    name: "Basic",
    description: "Great for beginners and solo experiments.",
    monthlyPrice: "$9",
    annualPrice: "$4.5",
    annualTotal: "$54",
    annualOriginalTotal: "$108",
    monthlyCredits: "100 credits/month",
    annualCredits: "1,200 credits/year instantly delivered",
    icon: Sparkles,
    features: [
      { label: "Essential AI models" },
      { label: "Standard generation speed" },
      { label: "Community support" },
      { label: "Commercial usage rights", included: false },
    ],
  },
  {
    annualId: "pro-yearly",
    monthlyId: "pro-monthly",
    name: "Standard",
    description: "Perfect for regular creators and teams.",
    monthlyPrice: "$19",
    annualPrice: "$9.5",
    annualTotal: "$114",
    annualOriginalTotal: "$228",
    monthlyCredits: "500 credits/month",
    annualCredits: "6,000 credits/year instantly delivered",
    badge: "Most Popular",
    highlight: true,
    icon: Crown,
    features: [
      { label: "All AI models access" },
      { label: "Commercial usage rights" },
      { label: "Faster generation queue" },
      { label: "Priority email support" },
    ],
  },
  {
    annualId: "studio-yearly",
    monthlyId: "studio-monthly",
    name: "Pro",
    description: "Built for professional workloads.",
    monthlyPrice: "$49",
    annualPrice: "$24.5",
    annualTotal: "$294",
    annualOriginalTotal: "$588",
    monthlyCredits: "2,000 credits/month",
    annualCredits: "24,000 credits/year instantly delivered",
    icon: Rocket,
    features: [
      { label: "Fastest generation speed" },
      { label: "Google Veo 3 access" },
      { label: "Commercial license" },
      { label: "Priority support & SLA" },
    ],
  },
]

const packs: Pack[] = [
  {
    id: "pack-mini",
    name: "Starter Pack",
    description: "Perfect for trying out the workflow.",
    price: "$15",
    credits: "800 credits",
    features: [
      "One-time payment",
      "Credits never expire",
      "All AI models access",
    ],
  },
  {
    id: "pack-creator",
    name: "Premium Pack",
    description: "Best value for professional creators.",
    price: "$29",
    credits: "1,600 credits",
    badge: "Best Value",
    highlight: true,
    features: [
      "One-time payment",
      "Credits never expire",
      "Commercial usage rights",
    ],
  },
  {
    id: "pack-agency",
    name: "Business Pack",
    description: "Extra credits for bigger projects.",
    price: "$79",
    credits: "5,000 credits",
    features: [
      "One-time payment",
      "Credits never expire",
      "Priority generation queue",
    ],
  },
]

const billingOptions: { id: BillingCycle; label: string }[] = [
  { id: "annual", label: "Annually (50% Off)" },
  { id: "monthly", label: "Monthly" },
]

export function PricingPlans() {
  const [billing, setBilling] = useState<BillingCycle>("annual")
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async (planId: string) => {
    setError(null)
    setLoadingId(planId)
    try {
      const response = await fetch("/api/creem/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ planId }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.error || "Checkout failed. Please try again.")
      }

      if (data?.url) {
        window.location.href = data.url
        return
      }

      throw new Error("Checkout URL missing.")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed.")
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <section id="pricing" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-20 pt-16 md:px-6">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-2 text-xs font-semibold text-blue-700">
              Pricing updates live
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 md:text-5xl">
            Nano Banana Pro for Every Creator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            From startups to enterprises, unlock Google Gemini 3 Pro image
            workflows with flexible plans.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="grid grid-cols-2 gap-1 rounded-full bg-white/80 p-1.5 text-center text-xs font-semibold shadow-lg ring-1 ring-blue-100">
            {billingOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={billing === option.id}
                onClick={() => setBilling(option.id)}
                className={cn(
                  "rounded-full px-6 py-2 transition-all",
                  billing === option.id
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-blue-600",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="text-xs text-slate-500">Cancel anytime</div>
        </div>

        {error ? (
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice
            const credits =
              billing === "annual" ? plan.annualCredits : plan.monthlyCredits
            const Icon = plan.icon
            return (
              <div
                key={`${plan.annualId}-${billing}`}
                className={cn(
                  "relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50 p-6 shadow-xl transition-all",
                  plan.highlight
                    ? "border-blue-400 shadow-blue-200/60 lg:scale-[1.02]"
                    : "hover:-translate-y-1 hover:shadow-2xl",
                )}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                    {plan.badge}
                  </span>
                ) : null}
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-6 border-y border-slate-100 py-6 text-center">
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-4xl font-semibold text-slate-900">
                      {price}
                    </span>
                    <span className="pb-1 text-sm text-slate-500">/mo</span>
                  </div>
                  {billing === "annual" ? (
                    <div className="mt-3 text-xs text-slate-500">
                      <div>
                        Billed annually{" "}
                        <span className="line-through">
                          {plan.annualOriginalTotal}
                        </span>
                      </div>
                      <div className="font-semibold text-blue-600">
                        Actually {plan.annualTotal}/year
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 text-xs text-slate-500">
                      Billed monthly
                    </div>
                  )}
                  <div className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
                    {credits}
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    className={cn(
                      "w-full",
                      plan.highlight
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                        : "bg-slate-900 text-white hover:bg-slate-800",
                    )}
                    onClick={() =>
                      handleCheckout(
                        billing === "annual" ? plan.annualId : plan.monthlyId,
                      )
                    }
                    disabled={loadingId === plan.id}
                    aria-busy={loadingId === plan.id}
                  >
                    {loadingId === plan.id ? "Redirecting..." : "Subscribe now"}
                  </Button>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-3">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs",
                            feature.included === false
                              ? "bg-slate-100 text-slate-400"
                              : "bg-blue-100 text-blue-600",
                          )}
                        >
                          {feature.included === false ? (
                            <X className="h-3 w-3" />
                          ) : (
                            <Check className="h-3 w-3" />
                          )}
                        </span>
                        <span
                          className={cn(
                            feature.included === false &&
                              "text-slate-400 line-through",
                          )}
                        >
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-md">
          <h3 className="text-2xl font-semibold text-slate-900">
            One-time credit packs
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Buy credits when you need them. Credits never expire and stack with
            subscriptions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className={cn(
                  "relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition-all",
                  pack.highlight
                    ? "border-blue-400 bg-blue-50/60 shadow-lg"
                    : "hover:-translate-y-1 hover:shadow-md",
                )}
              >
                {pack.badge ? (
                  <span className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {pack.badge}
                  </span>
                ) : null}
                <div className="text-lg font-semibold text-slate-900">
                  {pack.name}
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  {pack.description}
                </p>
                <div className="mt-4 text-3xl font-semibold text-slate-900">
                  {pack.price}
                </div>
                <div className="mt-1 text-sm text-blue-700">{pack.credits}</div>
                <Button
                  className={cn(
                    "mt-5 w-full",
                    pack.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-slate-800",
                  )}
                  onClick={() => handleCheckout(pack.id)}
                  disabled={loadingId === pack.id}
                  aria-busy={loadingId === pack.id}
                >
                  {loadingId === pack.id ? "Redirecting..." : "Purchase"}
                </Button>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
