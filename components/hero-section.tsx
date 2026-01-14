import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      {/* Decorative banana elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12 select-none">🍌</div>
      <div className="absolute bottom-20 right-20 text-8xl opacity-10 -rotate-12 select-none hidden lg:block">🍌</div>

      <div className="container max-w-6xl px-4 py-20 md:py-32 mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm font-medium">
            <span className="text-lg">🍌</span>
            <span className="text-balance">The AI model that outperforms competitors</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl">
            Transform Images with Simple Text Prompts
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Advanced AI model delivers consistent character editing and scene preservation. Experience the future of AI
            image editing.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <Link href="/#editor">
                Start Editing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#showcase">View Examples</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free trial available. No credit card required.
          </p>

          <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>One-shot editing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Multi-image support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
