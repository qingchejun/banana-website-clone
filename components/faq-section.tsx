import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Nano Banana?",
    answer:
      "It's a revolutionary AI image editing model that transforms photos using natural language prompts. Currently the most powerful image editing model available, with exceptional consistency and superior performance for character editing and scene preservation.",
  },
  {
    question: "How does it work?",
    answer:
      'Simply upload an image and describe your desired edits in natural language. The AI understands complex instructions like "place in a snowy mountain" or "change the background to sunset". It processes your text prompt and generates perfectly edited images.',
  },
  {
    question: "How is it better than competitors?",
    answer:
      "Our model excels in character consistency, scene blending, and one-shot editing. Users report superior performance in preserving facial features and seamlessly integrating edits with backgrounds. It also supports multi-image context, making it ideal for creating consistent AI influencers.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Yes! It's perfect for creating AI UGC content, social media campaigns, and marketing materials. Many users leverage it for creating consistent AI influencers and product photography. The high-quality outputs are suitable for professional use.",
  },
  {
    question: "What types of edits can it handle?",
    answer:
      "The editor handles complex edits including face completion, background changes, object placement, style transfers, and character modifications. It excels at understanding contextual instructions while maintaining photorealistic quality.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! You can try Nano Banana with our free tier. Simply upload your image, enter a text prompt describing your desired edits, and watch as the AI transforms your photo with incredible accuracy and consistency.",
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
