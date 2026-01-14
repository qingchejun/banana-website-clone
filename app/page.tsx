import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImageUploadSection } from "@/components/image-upload-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductIntroSection } from "@/components/product-intro-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { DisclaimerSection } from "@/components/disclaimer-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DisclaimerSection />
      <ProductIntroSection />
      <ImageUploadSection />
      <FeaturesSection />
      <ShowcaseSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
