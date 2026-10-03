import { MapPin, MessageSquare, ClipboardList, ShieldCheck } from "lucide-react"
import Container from "../layout/Container"

const REASONS = [
  {
    icon: MapPin,
    title: "Servis di lokasi Anda",
    desc: "Tidak perlu meninggalkan kendaraan di bengkel. Kami yang datang ke tempat Anda.",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi langsung dengan admin",
    desc: "Setiap pertanyaan dijawab langsung oleh tim kami — tidak ada perantara bot.",
  },
  {
    icon: ClipboardList,
    title: "Transparan sebelum pengerjaan",
    desc: "Estimasi biaya dan deskripsi pekerjaan disampaikan terlebih dahulu untuk persetujuan Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Proses yang bisa Anda pantau",
    desc: "Anda dapat melihat langsung proses servis karena dikerjakan di hadapan Anda.",
  },
]

export default function WhyMobaryn() {
  return (
    <section className="py-16 sm:py-20 bg-surface border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
              Kenapa Mobaryn?
            </h2>
            <p className="text-base text-navy/60">
              Model layanan kami dirancang agar servis mobil lebih mudah dan tidak menyita waktu Anda.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none m-0 p-0">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4 p-5 rounded-[8px] border border-navy/8 bg-white">
                <div className="shrink-0 flex items-start justify-center w-9 h-9 rounded-md bg-primary/8 text-primary">
                  <Icon size={18} className="mt-1.5" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-navy">{title}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
