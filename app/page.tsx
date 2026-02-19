import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ResearchSection } from "@/components/research-section"
import { AboutSection } from "@/components/about-section"
import { PracticeSection } from "@/components/practice-section"
import { MediaSection } from "@/components/media-section"
import { PublicationsSection } from "@/components/publications-section"
import { AffiliateSection } from "@/components/affiliate-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main role="main">
        <HeroSection />
        <ResearchSection />
        <AboutSection />
        <PracticeSection />
        <MediaSection />
        <PublicationsSection />
        <AffiliateSection />
      </main>
      <SiteFooter />
    </>
  )
}
