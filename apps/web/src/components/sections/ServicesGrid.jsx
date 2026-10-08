import Container from "../layout/Container"
import Button from "../ui/Button"

/*
  Ganti src setiap item dengan foto asli layanan Mobaryn.
  Rekomendasi rasio: 3:2 atau 4:3 per foto.
*/
const SERVICES = [
  {
    id: 1,
    title: "Tune Up Mesin",
    slug: "tune-up",
    description:
      "Optimasi performa mesin secara menyeluruh. Busi, filter udara, dan sistem pembakaran diperiksa.",
    photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    photoAlt: "Servis mesin kendaraan",
  },
  {
    id: 2,
    title: "Ganti Oli",
    slug: "ganti-oli",
    description:
      "Penggantian oli mesin dan filter sesuai spesifikasi kendaraan untuk menjaga performa optimal.",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    photoAlt: "Proses penggantian oli kendaraan",
  },
  {
    id: 3,
    title: "AC Mobil",
    slug: "ac-mobil",
    description:
      "Pengisian freon, pembersihan filter kabin, dan pemeriksaan kompresor AC kendaraan Anda.",
    photo: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    photoAlt: "Servis AC mobil",
  },
]

export default function ServicesShowcase() {
  return (
    <section
      style={{ paddingTop: "96px", paddingBottom: "96px", background: "#F5F7FA" }}
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div className="flex flex-col gap-3">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#0066FF" }}
            >
              Layanan Kami
            </p>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                color: "#071A3D",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Layanan Utama
            </h2>
          </div>
          <Button variant="ghost" href="/layanan" size="sm">
            Semua Layanan →
          </Button>
        </div>

        {/* Service grid — photo dominant */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="flex flex-col gap-4">
              {/* Photo */}
              <div
                className="w-full overflow-hidden"
                style={{ borderRadius: "4px", aspectRatio: "3/2", background: "#E8ECF0" }}
              >
                <img
                  src={s.photo}
                  alt={s.photoAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bold"
                  style={{ fontSize: "18px", color: "#071A3D", letterSpacing: "-0.015em" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "#334155", opacity: 0.75 }}
                >
                  {s.description}
                </p>
                <a
                  href={`/layanan/${s.slug}`}
                  className="text-[13px] font-medium transition-opacity hover:opacity-70 mt-1"
                  style={{ color: "#0066FF" }}
                >
                  Detail Layanan →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
