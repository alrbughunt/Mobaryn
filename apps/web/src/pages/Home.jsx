import Hero from "../components/sections/Hero"
import TrustMetrics from "../components/sections/TrustPoints"
import HowItWorks from "../components/sections/HowItWorks"
import ServicesShowcase from "../components/sections/ServicesGrid"
import ServiceAreasPreview from "../components/sections/ServiceAreasPreview"
import WhyMobaryn from "../components/sections/WhyMobaryn"
import GalleryPreview from "../components/sections/GalleryPreview"
import FinalCTA from "../components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <HowItWorks />
      <ServicesShowcase />
      <ServiceAreasPreview />
      <WhyMobaryn />
      <GalleryPreview />
      <FinalCTA />
    </>
  )
}
