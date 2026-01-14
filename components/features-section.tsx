import { Card } from "@/components/ui/card"
import { Sparkles, User, ImageIcon, Zap, Layers, Users } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Natural Language Editing",
    description: "Edit images using simple text prompts. Our AI understands complex instructions like GPT for images.",
  },
  {
    icon: User,
    title: "Character Consistency",
    description: "Maintain perfect character details across edits. Excels at preserving faces and identities.",
  },
  {
    icon: ImageIcon,
    title: "Scene Preservation",
    description: "Seamlessly blend edits with original backgrounds. Superior scene fusion technology.",
  },
  {
    icon: Zap,
    title: "One-Shot Editing",
    description: "Perfect results in a single attempt. Solves one-shot image editing challenges effortlessly.",
  },
  {
    icon: Layers,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Advanced multi-image editing workflows supported.",
  },
  {
    icon: Users,
    title: "AI UGC Creation",
    description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 border-b border-border/40">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Nano Banana?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            The most advanced AI image editor. Revolutionize your photo editing with natural language understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
