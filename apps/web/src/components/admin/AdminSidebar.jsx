import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {
  LayoutDashboard, Wrench, Newspaper, Image, Tag,
  MessageSquareQuote, Settings, LogOut, Menu, X,
} from "lucide-react"
import { useAuth } from "../../features/auth/useAuth"

const NAV_ITEMS = [
  { to: "/admin",           label: "Dashboard",   icon: LayoutDashboard, end: true },
  { to: "/admin/layanan",   label: "Layanan",      icon: Wrench },
  { to: "/admin/berita",    label: "Berita",       icon: Newspaper },
  { to: "/admin/galeri",    label: "Galeri",       icon: Image },
  { to: "/admin/promo",     label: "Promo",        icon: Tag },
  { to: "/admin/testimoni", label: "Testimonial",  icon: MessageSquareQuote },
  { to: "/admin/pengaturan",label: "Pengaturan",   icon: Settings },
]

const LINK_BASE =
  "flex items-center gap-3 px-3 py-2 rounded-[6px] text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
const LINK_ACTIVE = "bg-primary/10 text-primary"
const LINK_IDLE   = "text-navy/70 hover:bg-navy/5 hover:text-navy"

export default function AdminSidebar() {
  const [open, setOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/admin/login", { replace: true })
  }

  const navContent = (
    <nav className="flex flex-col gap-1 flex-1" aria-label="Menu admin">
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `${LINK_BASE} ${isActive ? LINK_ACTIVE : LINK_IDLE}`}
        >
          <Icon size={16} aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>
  )

  return (
    <>
      {/* ── Mobile top bar ─────────────────────────── */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-navy/8 bg-white sticky top-0 z-40">
        <span className="text-sm font-semibold text-navy">Admin — Mobaryn</span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup sidebar" : "Buka sidebar"}
          aria-expanded={open}
          className="flex items-center justify-center w-8 h-8 rounded-md text-navy hover:bg-navy/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {/* ── Mobile drawer ──────────────────────────── */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-30 flex"
          role="dialog"
          aria-modal="true"
          aria-label="Sidebar admin"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <div className="relative z-10 w-64 bg-white h-full flex flex-col border-r border-navy/8 p-4 gap-4">
            <div className="text-sm font-semibold text-navy pb-2 border-b border-navy/8">
              Admin — Mobaryn
            </div>
            {navContent}
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 rounded-[6px] text-sm font-medium text-navy/60 hover:bg-red-50 hover:text-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <LogOut size={16} aria-hidden="true" />
              Keluar
            </button>
          </div>
        </div>
      )}

      {/* ── Desktop sidebar ────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-navy/8 bg-white min-h-screen p-4 gap-4">
        <div className="text-sm font-semibold text-navy pb-3 border-b border-navy/8">
          Admin — Mobaryn
        </div>
        {navContent}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-[6px] text-sm font-medium text-navy/60 hover:bg-red-50 hover:text-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        >
          <LogOut size={16} aria-hidden="true" />
          Keluar
        </button>
      </aside>
    </>
  )
}
