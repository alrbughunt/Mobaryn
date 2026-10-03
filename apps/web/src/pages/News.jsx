import Container from "../components/layout/Container"
import NewsCard from "../features/news/NewsCard"
import { dummyNews } from "../features/news/dummyData"

export default function News() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Artikel &amp; Berita
            </h1>
            <p className="text-base text-navy/60">
              Tips perawatan kendaraan dan informasi layanan terbaru.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none m-0 p-0">
            {dummyNews.map((article) => (
              <li key={article.id}>
                <NewsCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}
