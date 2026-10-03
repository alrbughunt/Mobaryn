import Container from "../components/layout/Container"
import ServiceCard from "../features/services/ServiceCard"
import { dummyServices } from "../features/services/dummyData"

export default function Services() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Page header */}
          <div className="flex flex-col gap-2">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Layanan Kami
            </h1>
            <p className="text-base text-navy/60">
              Pilih layanan yang Anda butuhkan — semuanya dikerjakan langsung di lokasi Anda.
            </p>
          </div>

          {/* All services */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none m-0 p-0">
            {dummyServices.map((service) => (
              <li key={service.id}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}
