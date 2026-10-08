import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import Container from "./Container"
import WhatsAppButton from "../whatsapp/WhatsAppButton"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Layanan", to: "/layanan" },
  { label: "Tentang", to: "/tentang" },
  { label: "Area Cikarang", to: "/area-layanan" },
  { label: "Berita", to: "/berita" },   // <- sebelumnya hilang dari nav, hapus kalau sengaja
  { label: "Kontak", to: "/kontak" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    function handle(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, [menuOpen])

  useEffect(() => {
    function handleKey(e) { if (e.key === "Escape") setMenuOpen(false) }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Base class untuk nav link desktop: posisi relative (dasar untuk underline animasi)
  // + pseudo-element `after` sebagai garis bawah yang animasinya di-drive lewat width (w-0 -> w-full)
  const linkBase =
    "relative text-[13px] font-medium leading-none transition-colors duration-150 " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] rounded-sm " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#0066FF] " +
    "after:transition-all after:duration-300 after:ease-out"

  return (
    <>
      <header
        ref={menuRef}
        className={`sticky top-0 z-50 bg-white transition-all duration-200 ${scrolled
            ? "border-b border-[#071A3D]/10 shadow-[0_1px_0_rgba(7,26,61,0.06)]"
            : "border-b border-transparent"
          }`}
        style={{ height: "72px" }}
      >
        <Container className="h-full">
          <nav
            aria-label="Navigasi utama"
            className="flex items-center justify-between h-full"
          >
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] rounded-sm"
              aria-label="Mobaryn — kembali ke beranda"
            >
              <span
                className="font-bold tracking-tight"
                style={{ fontSize: "20px", color: "#071A3D", letterSpacing: "-0.02em" }}
              >
                Mobaryn
              </span>
            </NavLink>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive
                        ? "text-[#0066FF] after:w-full"
                        : "text-[#334155] hover:text-[#0066FF] after:w-0 hover:after:w-full"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <WhatsAppButton size="sm" />
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-md text-[#071A3D] hover:bg-[#071A3D]/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
            >
              <span
                className={`block h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? "w-0 opacity-0" : "w-5"}`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`}
              />
            </button>
          </nav>
        </Container>

        {/* Mobile drawer — selalu ter-mount, transisi fade + slide lewat opacity/translate
            (bukan conditional render) supaya animasi jalan pas buka MAUPUN tutup */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          aria-hidden={!menuOpen}
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-[#071A3D]/10 shadow-lg origin-top transition-all duration-200 ease-out ${menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
          <Container>
            <ul className="flex flex-col py-6 gap-0 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3.5 text-[15px] font-medium border-b border-[#071A3D]/6 transition-colors duration-150 hover:text-[#0066FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] ${isActive ? "text-[#0066FF]" : "text-[#071A3D]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-5">
                <WhatsAppButton size="md" className="w-full" />
              </li>
            </ul>
          </Container>
        </div>
      </header>
    </>
  )
}