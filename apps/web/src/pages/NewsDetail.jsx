import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Container from "../components/layout/Container"
import Button from "../components/ui/Button"
import { dummyNews } from "../features/news/dummyData"
import { buildWhatsAppLink } from "../lib/whatsapp"
import { siteConfig } from "../config/site"
import { ArrowLeft, MessageCircle } from "lucide-react"

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function NewsDetail() {
  const { slug } = useParams()
  const article = dummyNews.find((a) => a.slug === slug)

  // Set document title for basic SEO
  useEffect(() => {
    if (article) {
      document.title = `${article.title} — Mobaryn`
    } else {
      document.title = "Artikel tidak ditemukan — Mobaryn"
    }
    return () => {
      document.title = "Mobaryn"
    }
  }, [article])

  // ─── Not found ──────────────────────────────────────────────
  if (!article) {
    return (
      <div className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-4xl">🔍</p>
            <h1 className="text-2xl font-semibold text-navy">Artikel tidak ditemukan</h1>
            <p className="text-base text-navy/60">
              Artikel dengan alamat ini tidak tersedia atau sudah dipindahkan.
            </p>
            <Button variant="secondary" href="/berita" as={Link}>
              <ArrowLeft size={16} aria-hidden="true" />
              Kembali ke Daftar Artikel
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  const waHref = buildWhatsAppLink(
    siteConfig.whatsappNumber,
    siteConfig.defaultWhatsAppMessage
  )

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <article
          className="flex flex-col gap-8"
          style={{ maxWidth: "var(--text-max)" }}
        >
          {/* Back link */}
          <Link
            to="/berita"
            className="inline-flex items-center gap-1.5 text-sm text-navy/60 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm w-fit"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Semua Artikel
          </Link>

          {/* Meta */}
          <div className="flex flex-col gap-3">
            <time
              dateTime={article.published_at}
              className="text-xs font-medium text-navy/40 uppercase tracking-wide"
            >
              {formatDate(article.published_at)}
            </time>
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
            >
              {article.title}
            </h1>
            <p className="text-base text-navy/60 leading-relaxed">{article.excerpt}</p>
          </div>

          {/* Thumbnail */}
          <img
            src={article.thumbnail_url}
            alt={article.title}
            className="w-full rounded-[4px] border border-navy/8 object-cover"
            style={{ aspectRatio: "16/9" }}
          />

          {/* Article body — rendered as HTML from dummy data */}
          {/* CATATAN: konten ini adalah draft struktural, bukan artikel final */}
          <div
            className="prose-article text-base text-navy/80 leading-relaxed flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          {/* Soft WA CTA */}
          <div className="pt-6 border-t border-navy/8 flex flex-col gap-2">
            <p className="text-sm text-navy/60">
              Ada pertanyaan terkait perawatan kendaraan Anda?{" "}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                <MessageCircle size={14} aria-hidden="true" />
                Hubungi kami via WhatsApp
              </a>
            </p>
          </div>
        </article>
      </Container>
    </div>
  )
}
