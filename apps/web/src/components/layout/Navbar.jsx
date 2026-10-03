import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Container from "./Container"
import WhatsAppButton from "../whatsapp/WhatsAppButton"

const NAV_LINKS = [
  { label: "Home",          to: "/" },
  { label: "Layanan",       to: "/layanan" },
  { label: "Tentang",       to: "/tentang" },
  { label: "Area Layanan",  to: "/area-layanan" },
  { label: "Berita",        to: "/berita" },
  { label: "Kontak",        to: "/kontak" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  // Add shadow when page is scrolled
  useEffect(() => {
    const sentinel = document.getElementById("navbar-scroll-sentinel")
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [menuOpen])

  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  const linkBase =
    "text-sm font-medium leading-none transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
  const linkActive = "text-primary"
  const linkInactive = "text-navy/70"

  return (
    <>
      {/* Scroll sentinel — 1 px element at the very top of the page */}
      <div id="navbar-scroll-sentinel" aria-hidden="true" className="absolute top-0 h-px w-full pointer-events-none" />

      <header
        ref={menuRef}
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : "shadow-none"
        }`}
      >
        <Container>
          <nav
            aria-label="Navigasi utama"
            className="flex items-center justify-between h-16"
          >
            {/* Logo */}
            <NavLink
              to="/"
              className="text-lg font-semibold text-navy leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              aria-label="Mobaryn — kembali ke beranda"
            >
              Mobaryn
            </NavLink>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <WhatsAppButton />
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-navy hover:bg-navy/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </nav>
        </Container>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="false"
            aria-label="Menu navigasi"
            className="md:hidden bg-white border-t border-navy/8"
          >
            <Container>
              <ul className="flex flex-col py-4 gap-1 list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 px-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-navy/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                          isActive ? "text-primary bg-primary/5" : "text-navy/70"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-3 border-t border-navy/8 mt-2">
                  <WhatsAppButton />
                </li>
              </ul>
            </Container>
          </div>
        )}
      </header>
    </>
  )
}
