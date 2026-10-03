import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import Button from "../components/ui/Button"

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-6xl font-semibold text-navy/10">404</p>
          <h1 className="text-2xl font-semibold text-navy">Halaman tidak ditemukan</h1>
          <p className="text-base text-navy/60">
            Halaman yang Anda cari tidak ada atau sudah dipindahkan.
          </p>
          <Button variant="primary" href="/" as={Link}>
            Kembali ke Beranda
          </Button>
        </div>
      </Container>
    </div>
  )
}
