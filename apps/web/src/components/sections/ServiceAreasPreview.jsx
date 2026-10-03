import { Link } from "react-router-dom"
import Container from "../layout/Container"
import Button from "../ui/Button"

// TODO: ganti dengan area layanan asli setelah cakupan wilayah ditentukan
const PLACEHOLDER_AREAS = [
  "[Area Layanan 1]",
  "[Area Layanan 2]",
  "[Area Layanan 3]",
  "[Area Layanan 4]",
  "[Area Layanan 5]",
  "[Area Layanan 6]",
  "[Area Layanan 7]",
  "[Area Layanan 8]",
]

export default function ServiceAreasPreview() {
  return (
    <section className="py-16 sm:py-20 border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
              Area Layanan
            </h2>
            <p className="text-base text-navy/60">
              Kami melayani di berbagai wilayah — daftar area terus bertambah.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5 list-none m-0 p-0">
            {PLACEHOLDER_AREAS.map((area) => (
              <li key={area}>
                <span className="inline-flex items-center px-3 py-1.5 rounded-[6px] border border-navy/8 bg-surface text-sm text-navy/70 font-medium">
                  {area}
                </span>
              </li>
            ))}
          </ul>

          <div>
            <Button variant="secondary" href="/area-layanan" as={Link}>
              Lihat Semua Area
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
