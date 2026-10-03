import Container from "../components/layout/Container"
import WhatsAppButton from "../components/whatsapp/WhatsAppButton"
import { siteConfig } from "../config/site"
import { MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-12">

          {/* Page header */}
          <div className="flex flex-col gap-2">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Kontak
            </h1>
            <p className="text-base text-navy/60">
              Hubungi kami langsung untuk pemesanan atau pertanyaan layanan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: contact details */}
            <div className="flex flex-col gap-8">

              {/* WhatsApp CTA — primary */}
              <section className="flex flex-col gap-4 p-6 rounded-[8px] border border-navy/8 bg-surface">
                <h2 className="text-base font-semibold text-navy">Hubungi via WhatsApp</h2>
                <p className="text-sm text-navy/60">
                  Cara tercepat untuk memesan layanan atau bertanya langsung kepada tim kami.
                </p>
                <div>
                  <WhatsAppButton />
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy/50 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  {/* TODO: tampilkan nomor yang sudah diformat (misalnya +62 812-3456-7890) */}
                  {siteConfig.whatsappNumber}
                </a>
              </section>

              {/* Address */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-semibold text-navy flex items-center gap-2">
                  <MapPin size={16} className="text-primary" aria-hidden="true" />
                  Alamat
                </h2>
                {/* TODO: ganti dengan alamat asli */}
                <p className="text-sm text-navy/60">{siteConfig.address}</p>
              </section>

              {/* Operating hours */}
              <section className="flex flex-col gap-3">
                <h2 className="text-base font-semibold text-navy flex items-center gap-2">
                  <Clock size={16} className="text-primary" aria-hidden="true" />
                  Jam Operasional
                </h2>
                {/* TODO: ganti dengan jam operasional asli */}
                <p className="text-sm text-navy/60">{siteConfig.operatingHours}</p>
              </section>

              {/* Instagram */}
              <section className="flex flex-col gap-2">
                <h2 className="text-base font-semibold text-navy">Media Sosial</h2>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  {/* TODO: ganti dengan handle Instagram asli */}
                  Instagram →
                </a>
              </section>
            </div>

            {/* Right: map placeholder */}
            <div
              className="rounded-[8px] border border-navy/8 bg-surface flex items-center justify-center text-navy/30 text-sm font-medium"
              style={{ minHeight: "280px" }}
              role="img"
              aria-label="Placeholder peta lokasi"
            >
              {/* TODO: tambahkan Google Maps embed setelah API key tersedia */}
              Peta lokasi akan ditambahkan
            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}
