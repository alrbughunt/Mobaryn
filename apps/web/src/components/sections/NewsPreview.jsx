import { Link } from "react-router-dom"
import Container from "../layout/Container"
import Button from "../ui/Button"
import { dummyNews } from "../../features/news/dummyData"
import NewsCard from "../../features/news/NewsCard"

export default function NewsPreview() {
  return (
    <section className="py-16 sm:py-20 border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
              Artikel & Berita
            </h2>
            <p className="text-base text-navy/60">
              Tips perawatan kendaraan dan informasi layanan terbaru.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 list-none m-0 p-0">
            {dummyNews.map((article) => (
              <li key={article.id}>
                <NewsCard article={article} />
              </li>
            ))}
          </ul>

          <div>
            <Button variant="secondary" href="/berita" as={Link}>
              Lihat Semua Artikel
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
