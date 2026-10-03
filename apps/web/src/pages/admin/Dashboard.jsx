import { Link } from "react-router-dom"
import { dummyServices } from "../../features/services/dummyData"
import { dummyNews } from "../../features/news/dummyData"
import { dummyGallery } from "../../features/gallery/dummyData"
import { dummyTestimonials } from "../../features/testimonials/dummyData"
import { dummyPromos } from "../../features/promos/dummyData"

const STATS = [
  { label: "Layanan",      count: dummyServices.length,     to: "/admin/layanan" },
  { label: "Artikel",      count: dummyNews.length,         to: "/admin/berita" },
  { label: "Galeri",       count: dummyGallery.length,      to: "/admin/galeri" },
  { label: "Promo",        count: dummyPromos.length,       to: "/admin/promo" },
  { label: "Testimonial",  count: dummyTestimonials.length, to: "/admin/testimoni" },
]

export default function Dashboard() {
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-navy">Dashboard</h1>
        <p className="text-sm text-navy/50">Ringkasan konten Mobaryn</p>
      </div>

      {/* Stat cards — counts from dummy data arrays */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 list-none m-0 p-0">
        {STATS.map(({ label, count, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="flex flex-col gap-2 p-4 rounded-[8px] border border-navy/8 bg-white hover:border-primary/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group"
            >
              <span className="text-2xl font-semibold text-navy group-hover:text-primary transition-colors">
                {count}
              </span>
              <span className="text-xs font-medium text-navy/50">{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Quick links */}
      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-navy/60 uppercase tracking-wide">
          Menu Cepat
        </h2>
        <div className="flex flex-wrap gap-2">
          {STATS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-1.5 text-xs font-medium rounded-[6px] border border-navy/8 text-navy/70 hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Kelola {label}
            </Link>
          ))}
          <Link
            to="/admin/pengaturan"
            className="px-3 py-1.5 text-xs font-medium rounded-[6px] border border-navy/8 text-navy/70 hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Pengaturan
          </Link>
        </div>
      </section>
    </div>
  )
}
