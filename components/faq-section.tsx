import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Nano Banana?",
    answer:
      "Nano Banana is an AI image editor that transforms photos using natural language prompts. It focuses on character consistency and scene preservation for everyday editing workflows.",
  },
  {
    question: "How does it work?",
    answer:
      'Simply upload an image and describe your desired edits in natural language. The AI understands complex instructions like "place in a snowy mountain" or "change the background to sunset". It processes your text prompt and generates perfectly edited images.',
  },
  {
    question: "How is it better than competitors?",
    answer:
      "Nano Banana prioritizes character consistency, scene blending, and multi-image context. It is optimized for fast iteration and predictable edits across similar scenes.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Paid plans include commercial usage rights. Check the pricing page to confirm which plans include commercial use.",
  },
  {
    question: "What types of edits can it handle?",
    answer:
      "The editor handles complex edits including face completion, background changes, object placement, style transfers, and character modifications. It excels at understanding contextual instructions while maintaining photorealistic quality.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. You can try the free tier by uploading an image and describing the edits you want to apply.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container max-w-3xl px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-balance">Everything you need to know about Nano Banana</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-pretty">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-pretty">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
