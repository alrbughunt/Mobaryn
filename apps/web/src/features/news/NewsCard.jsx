import { Link } from "react-router-dom"

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

/**
 * Reusable news card — used in NewsPreview (homepage) and News list page.
 */
export default function NewsCard({ article }) {
  return (
    <Link
      to={`/berita/${article.slug}`}
      className="group flex flex-col rounded-[8px] border border-navy/8 overflow-hidden bg-white hover:border-primary/40 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <img
        src={article.thumbnail_url}
        alt={article.title}
        className="w-full object-cover"
        style={{ aspectRatio: "16/9" }}
        loading="lazy"
      />
      <div className="flex flex-col gap-2 p-4 flex-1">
        <time
          dateTime={article.published_at}
          className="text-xs font-medium text-navy/40 uppercase tracking-wide"
        >
          {formatDate(article.published_at)}
        </time>
        <h3 className="text-base font-semibold text-navy leading-snug group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-navy/60 leading-relaxed line-clamp-3">{article.excerpt}</p>
      </div>
    </Link>
  )
}
