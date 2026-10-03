import Container from "../layout/Container"
import WhatsAppButton from "../whatsapp/WhatsAppButton"

export default function FinalCTA() {
  return (
    <section className="bg-navy py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className="font-semibold text-white leading-tight"
            style={{ fontSize: "clamp(26px, 4vw, 34px)", maxWidth: "var(--text-max)" }}
          >
            Siap untuk servis mobil tanpa repot?
          </h2>
          <p className="text-base text-white/60 leading-relaxed" style={{ maxWidth: "var(--text-max)" }}>
            Hubungi kami sekarang dan kami akan konfirmasi jadwal serta lokasi Anda.
          </p>
          <WhatsAppButton />
        </div>
      </Container>
    </section>
  )
}
