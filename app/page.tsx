import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImageUploadSection } from "@/components/image-upload-section"
import { FeaturesSection } from "@/components/features-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImageUploadSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
