import Hero from "../components/sections/Hero"
import TrustPoints from "../components/sections/TrustPoints"
import ServicesGrid from "../components/sections/ServicesGrid"
import HowItWorks from "../components/sections/HowItWorks"
import ServiceAreasPreview from "../components/sections/ServiceAreasPreview"
import WhyMobaryn from "../components/sections/WhyMobaryn"
import Testimonials from "../components/sections/Testimonials"
import NewsPreview from "../components/sections/NewsPreview"
import GalleryPreview from "../components/sections/GalleryPreview"
import FinalCTA from "../components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPoints />
      <ServicesGrid />
      <HowItWorks />
      <ServiceAreasPreview />
      <WhyMobaryn />
      <Testimonials />
      <NewsPreview />
      <GalleryPreview />
      <FinalCTA />
    </>
  )
}
