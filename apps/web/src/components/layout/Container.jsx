/**
 * Container — constrains content width and applies responsive horizontal padding.
 * max-width: var(--container-max) = 1200px
 */
export default function Container({ children, className = "" }) {
  return (
    <div
      style={{ maxWidth: "var(--container-max)" }}
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
}
