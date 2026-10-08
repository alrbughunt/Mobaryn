import Container from "../layout/Container"
import WhatsAppButton from "../whatsapp/WhatsAppButton"

export default function FinalCTA() {
  return (
    <section
      style={{ background: "#071A3D", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <Container>
        <div className="flex flex-col items-center text-center gap-8">
          {/* Eyebrow */}
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(0,102,255,0.8)" }}
          >
            Hubungi Kami
          </p>

          {/* Big statement */}
          <div className="flex flex-col gap-2">
            <h2
              className="font-extrabold leading-none"
              style={{
                fontSize: "clamp(36px, 6vw, 80px)",
                color: "#ffffff",
                letterSpacing: "-0.035em",
                lineHeight: 1.0,
              }}
            >
              Mobil Bermasalah?
            </h2>
            <h2
              className="font-extrabold leading-none"
              style={{
                fontSize: "clamp(36px, 6vw, 80px)",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "-0.035em",
                lineHeight: 1.0,
              }}
            >
              Kami Datang Membantu.
            </h2>
          </div>

          {/* Subtext */}
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)", maxWidth: "420px" }}
          >
            Teknisi Mobaryn siap meluncur ke lokasi Anda di Cikarang.
            Konfirmasi jadwal langsung via WhatsApp.
          </p>

          {/* CTA */}
          <div className="mt-2">
            <WhatsAppButton
              size="lg"
              label="Chat WhatsApp Sekarang"
            />
          </div>

          {/* Micro assurance */}
          <p
            className="text-[12px]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Respon cepat · Tanpa perlu ke bengkel · Area Cikarang
          </p>
        </div>
      </Container>
    </section>
  )
}
