/**
 * Button — base UI component.
 *
 * Props:
 *   variant  "primary" | "secondary"  (default: "primary")
 *   href     string   — renders as <a> when provided
 *   children ReactNode
 *   ...rest  passed through to the underlying element
 */
export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium leading-none transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary",
    secondary:
      "border border-navy text-navy bg-transparent hover:bg-navy/5 focus-visible:outline-navy",
  }

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`
  const style = { borderRadius: "var(--radius-btn)" }

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} style={style} {...rest}>
      {children}
    </button>
  )
}
