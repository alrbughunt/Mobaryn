import Container from "../layout/Container"
import Button from "../ui/Button"

const AREAS = [
  "Cikarang Selatan",
  "Cikarang Utara",
  "Cikarang Barat",
  "Jababeka",
  "Delta Silicon",
  "EJIP",
  "MM2100",
  "Sekitarnya",
]

export default function ServiceAreasPreview() {
  return (
    <section
      style={{ background: "#071A3D", paddingTop: "96px", paddingBottom: "96px" }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Text + areas */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#0066FF" }}
              >
                Jangkauan Layanan
              </p>
              <h2
                className="font-extrabold"
                style={{
                  fontSize: "clamp(30px, 4vw, 52px)",
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Kami Melayani Seluruh Area Cikarang
              </h2>
            </div>

            <p
              className="text-[16px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.60)", maxWidth: "400px" }}
            >
              Kawasan industri, perumahan, dan seluruh wilayah sekitar Cikarang.
              Teknisi kami siap menjangkau lokasi Anda.
            </p>

            {/* Area list — plain text, no chips/cards */}
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 list-none m-0 p-0">
              {AREAS.map((area) => (
                <li
                  key={area}
                  className="text-[15px] font-medium"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {area}
                </li>
              ))}
            </ul>

            <div>
              <Button
                variant="secondary"
                size="md"
                href="/area-layanan"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Lihat Detail Area →
              </Button>
            </div>
          </div>

          {/* Right: Photo of Cikarang / industrial area */}
          <div className="flex-1 w-full lg:max-w-[500px]">
            {/*
              Ganti src dengan foto kawasan Cikarang atau foto teknisi
              sedang bekerja di lokasi industri.
            */}
            <div
              className="w-full overflow-hidden"
              style={{ borderRadius: "6px", aspectRatio: "4/3", background: "rgba(255,255,255,0.06)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1000&q=80"
                alt="Kawasan industri Cikarang"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
