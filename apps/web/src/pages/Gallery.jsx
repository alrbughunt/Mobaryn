import Container from "../components/layout/Container"
import { dummyGallery } from "../features/gallery/dummyData"
import { siteConfig } from "../config/site"

// Pad gallery to 16 items by cycling through existing dummy data
const GALLERY_ITEMS = Array.from(
  { length: 16 },
  (_, i) => dummyGallery[i % dummyGallery.length]
).map((item, i) => ({ ...item, id: i + 1 }))

export default function Gallery() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1
                className="font-semibold text-navy leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
              >
                Galeri
              </h1>
              <p className="text-base text-navy/60">
                Dokumentasi pekerjaan yang telah kami selesaikan.
              </p>
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy/60 hover:text-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm shrink-0"
            >
              Ikuti kami di Instagram →
            </a>
          </div>

          {/* Gallery grid */}
          {/* Lightbox / expand functionality deferred to a later stage */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none m-0 p-0">
            {GALLERY_ITEMS.map((item) => (
              <li key={item.id}>
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
    </div>
  )
}
