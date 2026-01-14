import { Card } from "@/components/ui/card"
import { Brush, ImagePlus, Layers, ShieldCheck } from "lucide-react"

const highlights = [
  {
    title: "Text-to-edit workflow",
    description: "Describe edits in natural language and refine results quickly.",
    icon: Brush,
  },
  {
    title: "Multi-image context",
    description: "Bring references together for consistent scenes and characters.",
    icon: Layers,
  },
  {
    title: "Production-ready exports",
    description: "High-resolution output suited for marketing and creative teams.",
    icon: ImagePlus,
  },
  {
    title: "Commercial usage rights",
    description: "Clear licensing across paid plans for professional use.",
    icon: ShieldCheck,
  },
]

export function ProductIntroSection() {
  return (
    <section id="product" className="py-20 md:py-28 border-b border-border/40">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Product Overview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mt-4">
            Nano Banana helps teams edit and generate images with a simple prompt-first workflow built for speed and
            consistency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item.title} className="p-6">
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
