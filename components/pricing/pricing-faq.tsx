"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How can I purchase more credits?",
    answer:
      "Buy a one-time credit pack at any time. One-time credits never expire and stack with your subscription.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You can cancel anytime and keep access until the end of your billing period.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "Subscription credits reset each billing cycle. One-time credits never expire.",
  },
  {
    question: "Can I switch between monthly and annual plans?",
    answer:
      "You can upgrade or switch billing cadence anytime. Changes apply immediately and may be prorated.",
  },
]

export function PricingFaq() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 pt-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Need help? Reach out and our team will get back to you quickly.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-2"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left text-sm font-semibold text-slate-900">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
