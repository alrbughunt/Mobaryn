import Container from "../components/layout/Container"
import WhatsAppButton from "../components/whatsapp/WhatsAppButton"

// TODO: ganti placeholder area dengan daftar wilayah asli setelah cakupan ditentukan
const PLACEHOLDER_AREAS = Array.from({ length: 12 }, (_, i) => `[Area Layanan ${i + 1}]`)

export default function ServiceAreas() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-12">

          {/* Page header */}
          <div className="flex flex-col gap-2">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Area Layanan
            </h1>
            <p className="text-base text-navy/60">
              Daftar wilayah yang kami layani. Area terus bertambah — tanyakan langsung jika
              lokasi Anda belum tercantum.
            </p>
          </div>

          {/* Area grid */}
          <section aria-label="Daftar area layanan">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 list-none m-0 p-0">
              {PLACEHOLDER_AREAS.map((area) => (
                <li key={area}>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-[6px] border border-navy/8 bg-surface text-sm text-navy/70 font-medium">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Out-of-area CTA */}
          <section className="flex flex-col gap-4 p-6 rounded-[8px] border border-navy/8 bg-surface">
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-semibold text-navy">Area Anda tidak ada di daftar?</h2>
              <p className="text-sm text-navy/60">
                Tanyakan langsung via WhatsApp — kami akan informasikan apakah lokasi Anda
                dapat dilayani.
              </p>
            </div>
            <WhatsAppButton />
          </section>

        </div>
      </Container>
    </div>
  )
}
