import Container from "../layout/Container"

const STEPS = [
  {
    number: "01",
    title: "Hubungi Kami",
    desc: "Kirim pesan WhatsApp. Tim kami merespons cepat untuk mengetahui kebutuhan kendaraan Anda.",
  },
  {
    number: "02",
    title: "Pilih Jadwal\ndan Lokasi",
    desc: "Tentukan waktu dan titik penjemputan yang paling nyaman — rumah, kantor, atau mana saja.",
  },
  {
    number: "03",
    title: "Teknisi Datang",
    desc: "Teknisi kami tiba sesuai jadwal dengan peralatan lengkap siap melakukan servis di tempat.",
  },
  {
    number: "04",
    title: "Mobil Siap\nDigunakan",
    desc: "Servis selesai, laporan pekerjaan disampaikan. Kendaraan Anda kembali prima.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      style={{ paddingTop: "96px", paddingBottom: "96px", background: "#ffffff" }}
    >
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-3 mb-16 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#0066FF" }}
          >
            Cara Kerja
          </p>
          <h2
            className="font-extrabold leading-none mx-auto"
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              color: "#071A3D",
              letterSpacing: "-0.03em",
            }}
          >
            Cara Kerja Mobaryn
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Horizontal rule connecting steps — desktop only */}
          <div
            className="hidden lg:block absolute top-[22px] left-0 right-0"
            style={{
              height: "1px",
              background: "rgba(7,26,61,0.12)",
              marginLeft: "calc(12.5% + 20px)",
              marginRight: "calc(12.5% + 20px)",
            }}
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 list-none m-0 p-0">
            {STEPS.map((step, idx) => (
              <li key={step.number} className="flex flex-col gap-5 relative">
                {/* Number bubble */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#071A3D",
                      boxShadow: "0 0 0 4px #ffffff, 0 0 0 5px rgba(7,26,61,0.12)",
                    }}
                  >
                    <span
                      className="font-bold text-[13px] leading-none"
                      style={{ color: "#0066FF" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h3
                    className="font-bold leading-tight whitespace-pre-line"
                    style={{
                      fontSize: "18px",
                      color: "#071A3D",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#334155", opacity: 0.75 }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Connector line — mobile vertical */}
                {idx < STEPS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[21px] top-[44px] w-px"
                    style={{ height: "calc(100% - 44px)", background: "rgba(7,26,61,0.10)" }}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
