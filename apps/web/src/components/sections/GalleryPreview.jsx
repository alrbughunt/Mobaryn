import { Link } from "react-router-dom"
import Container from "../layout/Container"
import { dummyGallery } from "../../features/gallery/dummyData"
import { siteConfig } from "../../config/site"

export default function GalleryPreview() {
  return (
    <section className="py-16 sm:py-20 bg-surface border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
                Galeri
              </h2>
              <p className="text-base text-navy/60">
                Dokumentasi pekerjaan yang telah kami selesaikan.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/galeri"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                Lihat Galeri Lengkap →
              </Link>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-navy/60 hover:text-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                Instagram →
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none m-0 p-0">
            {dummyGallery.map((item) => (
              <li key={item.id}>
                {/* Lightbox/expand functionality deferred to a later stage */}
                <div
                  className="rounded-[8px] border border-navy/8 overflow-hidden bg-white"
                  title={item.caption}
                >
                  <img
                    src={item.image_url}
                    alt={item.caption}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/2" }}
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
