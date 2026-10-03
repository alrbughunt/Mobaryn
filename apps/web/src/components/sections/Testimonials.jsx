import Container from "../layout/Container"
import { dummyTestimonials } from "../../features/testimonials/dummyData"

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={`w-4 h-4 ${i < rating ? "text-primary" : "text-navy/20"}`}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 border-b border-navy/8">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] sm:text-[34px] font-semibold text-navy leading-tight">
              Testimoni
            </h2>
            {/* NOTE: semua testimoni di bawah adalah data placeholder, bukan ulasan nyata */}
            <p className="text-sm text-navy/40 italic">
              ⚠ Data di bawah adalah placeholder — akan diganti dengan testimoni pelanggan nyata.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 list-none m-0 p-0">
            {dummyTestimonials.map((t) => (
              <li
                key={t.id}
                className="flex flex-col gap-4 p-5 rounded-[8px] border border-navy/8 bg-surface"
              >
                <StarRating rating={t.rating} />
                <p className="text-sm text-navy/70 leading-relaxed flex-1 italic">{t.content}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-navy/8">
                  <img
                    src={t.photo_url}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover border border-navy/8"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-navy/60">{t.customer_name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
