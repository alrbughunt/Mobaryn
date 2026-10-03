import { useParams, Link } from "react-router-dom"
import Container from "../components/layout/Container"
import Button from "../components/ui/Button"
import ServiceCard from "../features/services/ServiceCard"
import { dummyServices } from "../features/services/dummyData"
import { buildWhatsAppLink } from "../lib/whatsapp"
import { siteConfig } from "../config/site"
import { MessageCircle, ArrowLeft } from "lucide-react"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = dummyServices.find((s) => s.slug === slug)

  // ─── Not found state ───────────────────────────────────────
  if (!service) {
    return (
      <div className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-4xl">🔍</p>
            <h1 className="text-2xl font-semibold text-navy">Layanan tidak ditemukan</h1>
            <p className="text-base text-navy/60">
              Layanan dengan alamat ini tidak tersedia atau sudah dipindahkan.
            </p>
            <Button variant="secondary" href="/layanan" as={Link}>
              <ArrowLeft size={16} aria-hidden="true" />
              Kembali ke Daftar Layanan
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  // WhatsApp link — uses per-service template (falls back to site default)
  const waMessage = service.whatsapp_template || siteConfig.defaultWhatsAppMessage
  const waHref = buildWhatsAppLink(siteConfig.whatsappNumber, waMessage)

  // Related services (exclude current, max 3)
  const related = dummyServices.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-12" style={{ maxWidth: "var(--text-max)" }}>

          {/* Back link */}
          <Link
            to="/layanan"
            className="inline-flex items-center gap-1.5 text-sm text-navy/60 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm w-fit"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Semua Layanan
          </Link>

          {/* Thumbnail */}
          <img
            src={service.thumbnail_url}
            alt={service.name}
            className="w-full rounded-[4px] border border-navy/8 object-cover"
            style={{ aspectRatio: "16/9" }}
          />

          {/* Title + description */}
          <div className="flex flex-col gap-4">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 36px)" }}
            >
              {service.name}
            </h1>
            <p className="text-base text-navy/60">{service.short_description}</p>

            {/* Long description — paragraphs split by \n\n */}
            <div className="flex flex-col gap-3 mt-2">
              {service.long_description.split("\n\n").map((para, i) => (
                <p key={i} className="text-base text-navy/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* ── Primary CTA: per-service WhatsApp template ── */}
          <div className="flex flex-col gap-3 p-5 rounded-[8px] border border-primary/20 bg-primary/4">
            <p className="text-sm font-medium text-navy">
              Tertarik dengan layanan ini?
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              style={{ borderRadius: "var(--radius-btn)" }}
              aria-label={`Hubungi Mobaryn via WhatsApp untuk layanan ${service.name}`}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Pesan via WhatsApp
            </a>
            <p className="text-xs text-navy/40 italic">
              Pesan yang terisi otomatis: &ldquo;{waMessage}&rdquo;
            </p>
          </div>
        </div>

        {/* ── Related services ── */}
        {related.length > 0 && (
          <div className="flex flex-col gap-6 mt-16 pt-10 border-t border-navy/8">
            <h2 className="text-lg font-semibold text-navy">Layanan Lainnya</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 list-none m-0 p-0">
              {related.map((s) => (
                <li key={s.id}>
                  <ServiceCard service={s} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  )
}
