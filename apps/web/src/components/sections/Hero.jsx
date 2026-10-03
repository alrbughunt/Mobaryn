import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Container from "../layout/Container"
import WhatsAppButton from "../whatsapp/WhatsAppButton"
import Button from "../ui/Button"

export default function Hero() {
  const heroRef = useRef(null)

  // Fade + slide-up reveal on mount — only animation on the homepage
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="bg-surface py-16 sm:py-24 border-b border-navy/8">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Text block */}
          <div ref={heroRef} className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(34px, 5vw, 52px)" }}
            >
              Mekanik datang ke lokasi Anda — tanpa perlu ke bengkel.
            </h1>
            <p className="text-lg text-navy/60 leading-relaxed" style={{ maxWidth: "var(--text-max)" }}>
              Pesan layanan servis mobil langsung via WhatsApp, dan tim kami akan tiba di tempat Anda.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <WhatsAppButton />
              <Button variant="secondary" href="/layanan" as={Link}>
                Lihat Layanan
              </Button>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="w-full rounded-[4px] border border-navy/8 bg-white flex items-center justify-center text-navy/30 text-sm font-medium"
              style={{ aspectRatio: "16/9" }}
              aria-label="Area visual utama — placeholder"
              role="img"
            >
              {/* TODO: ganti dengan foto/ilustrasi hero asli */}
              Visual Hero — Placeholder
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
