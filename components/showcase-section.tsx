import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const showcaseItems = [
  {
    title: "Ultra-Fast Mountain Generation",
    description: "Created in 0.8 seconds with optimized neural engine",
    image: "/majestic-mountain-sunset.png",
  },
  {
    title: "Instant Garden Creation",
    description: "Complex scene rendered in milliseconds",
    image: "/beautiful-garden-with-flowers-and-butterflies.jpg",
  },
  {
    title: "Real-time Beach Synthesis",
    description: "Delivers photorealistic results at lightning speed",
    image: "/tropical-beach-paradise.png",
  },
  {
    title: "Rapid Aurora Generation",
    description: "Advanced effects processed instantly",
    image: "/northern-lights-aurora-borealis-night-sky.jpg",
  },
]

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 md:py-32 border-b border-border/40 bg-accent/20">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-sm font-medium mb-4">
            <span className="text-lg">⚡</span>
            <span>Lightning-Fast AI Creations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">See What Nano Banana Creates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">in milliseconds</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  Nano Banana Speed
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Experience the power yourself</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Try Nano Banana Generator
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
