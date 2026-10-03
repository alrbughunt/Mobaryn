import { Link } from 'react-router-dom';
import Container from "../layout/Container"
import Button from "../ui/Button"
import { dummyServices } from "../../features/services/dummyData"
import ServiceCard from "../../features/services/ServiceCard"


export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
              Layanan Kami
            </h2>
            <p className="text-base text-navy/60">
              Servis langsung di lokasi Anda — pilih layanan yang Anda butuhkan.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none m-0 p-0">
            {dummyServices.map((service) => (
              <li key={service.id}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>

          <div>
            <Button variant="secondary" href="/layanan" as={Link}>
              Lihat Semua Layanan
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
