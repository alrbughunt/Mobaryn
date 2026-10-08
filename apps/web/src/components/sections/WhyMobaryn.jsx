import Container from "../layout/Container"

const PILLARS = [
  {
    title: "Teknisi Profesional",
    desc: "Terlatih, berpengalaman, dan paham karakteristik berbagai merek kendaraan.",
  },
  {
    title: "Harga Transparan",
    desc: "Estimasi disampaikan sebelum pengerjaan dimulai. Tidak ada biaya tersembunyi.",
  },
  {
    title: "Datang ke Lokasi",
    desc: "Kami yang bergerak. Anda tidak perlu meninggalkan tempat kerja atau rumah.",
  },
  {
    title: "Peralatan Lengkap",
    desc: "Setiap kunjungan dilengkapi dengan tools profesional siap digunakan.",
  },
]

export default function WhyMobaryn() {
  return (
    <section
      style={{ paddingTop: "96px", paddingBottom: "96px", background: "#F5F7FA" }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left: Statement */}
          <div className="flex-1 lg:max-w-[480px] flex flex-col gap-6 lg:sticky lg:top-[96px]">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#0066FF" }}
            >
              Kenapa Mobaryn
            </p>
            <h2
              className="font-extrabold leading-tight"
              style={{
                fontSize: "clamp(30px, 4.5vw, 56px)",
                color: "#071A3D",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              Dirancang Untuk Pengguna Yang Tidak Memiliki Waktu Datang Ke Bengkel.
            </h2>

            <p
              className="text-[16px] leading-relaxed"
              style={{ color: "#334155", opacity: 0.75 }}
            >
              Model layanan kami menempatkan kenyamanan Anda sebagai prioritas utama —
              bukan sekadar servis, tapi pengalaman yang efisien dan modern.
            </p>
          </div>

          {/* Right: Pillar list — no cards, clean typography */}
          <div className="flex-1 flex flex-col">
            {PILLARS.map(({ title, desc }, i) => (
              <div
                key={title}
                className="flex gap-6 py-8"
                style={{
                  borderBottom: i < PILLARS.length - 1
                    ? "1px solid rgba(7,26,61,0.08)"
                    : "none",
                }}
              >
                {/* Index */}
                <span
                  className="text-[13px] font-semibold leading-none shrink-0 mt-0.5"
                  style={{ color: "#0066FF", width: "28px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="font-bold leading-tight"
                    style={{ fontSize: "17px", color: "#071A3D", letterSpacing: "-0.01em" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#334155", opacity: 0.7 }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
