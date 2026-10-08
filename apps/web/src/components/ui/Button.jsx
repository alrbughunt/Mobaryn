/**
 * Button — Mobaryn v2 premium design system.
 *
 * variant  "primary"    — solid blue #0066FF, white text
 *          "secondary"  — outlined navy, transparent bg
 *          "ghost"      — no border, navy text, hover underline
 */
export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  size = "md",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium leading-none transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer select-none"

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  const variants = {
    primary:
      "bg-[#0066FF] text-white hover:bg-[#0052CC] focus-visible:outline-[#0066FF] tracking-wide",
    secondary:
      "border border-[#071A3D] text-[#071A3D] bg-transparent hover:bg-[#071A3D] hover:text-white focus-visible:outline-[#071A3D] tracking-wide",
    ghost:
      "text-[#0066FF] bg-transparent hover:underline focus-visible:outline-[#0066FF] px-0",
  }

  const classes = `${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.primary} ${className}`
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
