import Container from "../layout/Container"

const METRICS = [
  { value: "10+",       label: "Layanan Mobil",      sub: "Tune up, oli, AC, dan lebih" },
  { value: "Cikarang",  label: "Area Operasional",   sub: "Seluruh kawasan Cikarang" },
  { value: "Teknisi",   label: "Profesional",        sub: "Terlatih dan berpengalaman" },
  { value: "Respon",    label: "Cepat",               sub: "Konfirmasi via WhatsApp" },
]

export default function TrustMetrics() {
  return (
    <section
      className="border-y"
      style={{ borderColor: "rgba(7,26,61,0.08)" }}
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {METRICS.map(({ value, label, sub }, i) => (
            <div
              key={value}
              className={`flex flex-col gap-1 py-10 px-6 lg:px-8 ${
                i < METRICS.length - 1 ? "border-r" : ""
              }`}
              style={{ borderColor: "rgba(7,26,61,0.08)" }}
            >
              {/* Large value */}
              <span
                className="font-extrabold leading-none"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#071A3D",
                  letterSpacing: "-0.03em",
                }}
              >
                {value}
              </span>

              {/* Label */}
              <span
                className="text-[15px] font-semibold"
                style={{ color: "#071A3D" }}
              >
                {label}
              </span>

              {/* Sub */}
              <span
                className="text-[13px] leading-snug"
                style={{ color: "#334155", opacity: 0.6 }}
              >
                {sub}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
