import { Link } from "react-router-dom"

/**
 * Reusable service card — used in ServicesGrid (homepage) and Services page.
 */
export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/layanan/${service.slug}`}
      className="group flex flex-col rounded-[8px] border border-navy/8 overflow-hidden bg-white hover:border-primary/40 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <img
        src={service.thumbnail_url}
        alt={service.name}
        className="w-full object-cover"
        style={{ aspectRatio: "3/2" }}
        loading="lazy"
      />
      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="text-base font-semibold text-navy group-hover:text-primary transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-navy/60 leading-relaxed">{service.short_description}</p>
      </div>
    </Link>
  )
}
