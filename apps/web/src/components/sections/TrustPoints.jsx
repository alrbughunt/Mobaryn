import { MapPin, MessageCircle, ClipboardCheck, Wrench } from "lucide-react"
import Container from "../layout/Container"

const POINTS = [
  {
    icon: MapPin,
    label: "Datang ke lokasi Anda",
    desc: "Mekanik hadir langsung di tempat Anda parkir atau tinggal.",
  },
  {
    icon: MessageCircle,
    label: "Komunikasi via WhatsApp",
    desc: "Pesan, konfirmasi, dan update pekerjaan langsung lewat chat.",
  },
  {
    icon: ClipboardCheck,
    label: "Transparan sebelum pengerjaan",
    desc: "Diagnosa dan estimasi disampaikan sebelum servis dimulai.",
  },
  {
    icon: Wrench,
    label: "Tanpa antar-jemput kendaraan",
    desc: "Hemat waktu — tidak perlu meninggalkan mobil di bengkel.",
  },
]

export default function TrustPoints() {
  return (
    <section className="py-12 border-b border-navy/8">
      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0">
          {POINTS.map(({ icon: Icon, label, desc }) => (
            <li key={label} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <Icon size={20} aria-hidden="true" />
                <span className="text-sm font-semibold text-navy">{label}</span>
              </div>
              <p className="text-sm text-navy/60 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
