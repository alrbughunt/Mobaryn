import Container from "../layout/Container"
import { siteConfig } from "../../config/site"

// Editorial gallery items — replace src with real photos when available
const GALLERY_ITEMS = [
  {
    id: 1,
    label: "Servis mesin di lokasi",
    bg: "linear-gradient(135deg, #0d2a5e 0%, #071A3D 100%)",
  },
  {
    id: 2,
    label: "Pengecekan oli",
    bg: "linear-gradient(160deg, #0a1f4e 0%, #0d3068 100%)",
  },
  {
    id: 3,
    label: "Teknisi profesional",
    bg: "linear-gradient(135deg, #071A3D 0%, #0a2356 100%)",
  },
]

// Mechanical icon for placeholder visual
function MechIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export default function GalleryPreview() {
  return (
    <section
      style={{ paddingTop: "96px", paddingBottom: "96px", background: "#ffffff" }}
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#0066FF" }}
            >
              Dokumentasi
            </p>
            <h2
              className="font-extrabold leading-none"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#071A3D",
                letterSpacing: "-0.03em",
              }}
            >
              Galeri Kerja
            </h2>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium transition-colors hover:opacity-80 flex items-center gap-1.5"
            style={{ color: "#0066FF" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            Lihat di Instagram
          </a>
        </div>

        {/* Grid rata satu baris — ganti jumlah item di GALLERY_ITEMS kalau mau 2 saja */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[6px]"
              style={{
                aspectRatio: "4/3",
                background: item.bg,
              }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <MechIcon />
                <span
                  className="text-[11px] font-medium text-center px-3 leading-snug"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {item.label}
                </span>
              </div>

              {/* Subtle overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(7,26,61,0.5) 0%, transparent 50%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Link to full gallery */}
        <div className="mt-8 text-center">
          <a
            href="/galeri"
            className="text-[14px] font-medium transition-colors hover:opacity-80"
            style={{ color: "#0066FF" }}
          >
            Lihat Galeri Lengkap →
          </a>
        </div>
      </Container>
    </section>
  )
}