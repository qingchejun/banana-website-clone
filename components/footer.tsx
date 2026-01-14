import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-accent/20">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍌</span>
              <span className="text-xl font-bold">Nano Banana</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Transform any image with simple text prompts. Advanced AI model for consistent character editing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#product"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/quick-start"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Quick Start
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/#showcase"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <div>© 2025 Nano Banana. All rights reserved.</div>
            <div>
              Contact:{" "}
              <a
                className="hover:text-foreground transition-colors"
                href="mailto:supports@nanobananapic.space"
              >
                supports@nanobananapic.space
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
