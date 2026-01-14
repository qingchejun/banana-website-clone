"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <span className="text-xl font-bold text-balance">Nano Banana</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#product"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Product
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#showcase"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Examples
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/quick-start"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Quick Start
          </Link>
          <Link
            href="/docs/api"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            API Docs
          </Link>
        </nav>

        <Button
          asChild
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/#editor">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}
