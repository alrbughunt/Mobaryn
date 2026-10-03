import Container from "../layout/Container"

const STEPS = [
  { number: 1, title: "Pilih layanan", desc: "Temukan layanan yang sesuai kebutuhan kendaraan Anda di halaman layanan." },
  { number: 2, title: "Hubungi via WhatsApp", desc: "Tekan tombol WhatsApp — pesan otomatis terisi, tinggal kirim." },
  { number: 3, title: "Konfirmasi jadwal", desc: "Admin kami menghubungi Anda untuk konfirmasi waktu dan lokasi." },
  { number: 4, title: "Mekanik datang ke lokasi", desc: "Servis dilakukan langsung di tempat Anda tanpa perlu ke bengkel." },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-surface border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
              Cara Kerja
            </h2>
            <p className="text-base text-navy/60">
              Empat langkah mudah untuk mendapatkan servis di lokasi Anda.
            </p>
          </div>

          {/* Steps */}
          <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 list-none m-0 p-0">
            {STEPS.map((step, idx) => (
              <li key={step.number} className="relative flex flex-col gap-4">
                {/* Dashed connector (desktop only, between steps) */}
                {idx < STEPS.length - 1 && (
                  <span
                    className="hidden lg:block absolute top-5 left-[calc(100%+8px)] w-[calc(100%-16px)] border-t-2 border-dashed border-navy/20"
                    aria-hidden="true"
                  />
                )}
                {/* Step number bubble */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold shrink-0">
                  {step.number}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
