import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MobileWhatsAppBar from "../components/whatsapp/MobileWhatsAppBar"

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Mobile sticky WhatsApp bar — hidden on md+ */}
      <MobileWhatsAppBar />
    </div>
  )
}
