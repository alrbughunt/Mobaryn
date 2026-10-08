import { useEffect, useRef } from "react"
import Container from "../layout/Container"
import WhatsAppButton from "../whatsapp/WhatsAppButton"
import Button from "../ui/Button"

export default function Hero() {
  const textRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    const bg = bgRef.current
    if (!text || !bg) return

    text.style.opacity = "0"
    text.style.transform = "translateY(32px)"
    bg.style.opacity = "0"

    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        text.style.transition = "opacity 0.7s ease, transform 0.7s ease"
        text.style.opacity = "1"
        text.style.transform = "translateY(0)"
      }, 60)
      setTimeout(() => {
        bg.style.transition = "opacity 0.9s ease"
        bg.style.opacity = "1"
      }, 0)
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[560px] lg:min-h-[660px] flex items-center">
      {/* Background: foto full-bleed + gradient overlay */}
      <div ref={bgRef} className="absolute inset-0">
        {/*
          Ganti src di bawah dengan URL foto asli teknisi Mobaryn.
          Rekomendasi: foto mekanik sedang bekerja pada kendaraan,
          landscape, resolusi cukup besar (min. 1600px lebar) karena
          ini jadi background penuh, bukan kotak kecil lagi.
        */}
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80"
          alt="Teknisi Mobaryn melakukan servis kendaraan di lokasi pelanggan"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient: gelap di kiri (tempat teks) -> transparan di kanan */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7,26,61,0.93) 0%, rgba(7,26,61,0.80) 32%, rgba(7,26,61,0.35) 60%, rgba(7,26,61,0.05) 85%)",
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div ref={textRef} className="max-w-xl flex flex-col gap-7 py-20 lg:py-0">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#4D94FF" }}
          >
            Bengkel Panggilan Cikarang
          </p>

          <h1
            className="font-extrabold"
            style={{
              fontSize: "clamp(40px, 5.5vw, 68px)",
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Servis Mobil<br />
            Datang Ke Lokasi Anda
          </h1>

          <p
            className="text-[17px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)", maxWidth: "440px" }}
          >
            Perawatan dan perbaikan mobil tanpa perlu antre di bengkel.
            Teknisi Mobaryn siap datang langsung ke lokasi Anda di Cikarang.
          </p>
        </div>
      </Container>
    </section>
  )
}