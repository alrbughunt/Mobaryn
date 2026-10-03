import { Link } from "react-router-dom"
import Container from "./Container"
import { siteConfig } from "../../config/site"

const NAV_LINKS = [
  { label: "Home",          to: "/" },
  { label: "Layanan",       to: "/layanan" },
  { label: "Tentang",       to: "/tentang" },
  { label: "Area Layanan",  to: "/area-layanan" },
  { label: "Berita",        to: "/berita" },
  { label: "Kontak",        to: "/kontak" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white mt-auto">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-base font-semibold text-white">Mobaryn</span>
            {/* TODO: ganti deskripsi ini dengan copy final brand */}
            <p className="text-sm leading-relaxed text-white/60">
              Bengkel mobil panggilan profesional — kami datang ke lokasi Anda.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
              Kontak
            </h3>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-sm text-white/70">
              <li>
                {/* TODO: ganti nomor WA dengan data asli */}
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  {siteConfig.whatsappNumber}
                </a>
              </li>
              <li>
                {/* TODO: ganti alamat dengan data asli */}
                {siteConfig.address}
              </li>
              <li>
                {/* TODO: ganti jam operasional dengan data asli */}
                {siteConfig.operatingHours}
              </li>
            </ul>
          </div>

          {/* Col 4 — Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
              Ikuti Kami
            </h3>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Mobaryn"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              {/* Instagram icon — inline SVG (lucide-react does not ship this icon) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 text-xs text-white/40 text-center">
          © {year} Mobaryn. Semua hak dilindungi.
        </div>
      </Container>
    </footer>
  )
}
