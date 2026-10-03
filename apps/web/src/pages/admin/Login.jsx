import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../features/auth/useAuth"

// TODO: ganti dengan Supabase Auth sign-in di tahap integrasi
// Saat ini menerima input apa saja — BUKAN autentikasi sungguhan.

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // Fake login — accepts any credentials
    login()
    navigate("/admin", { replace: true })
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div
        className="w-full bg-white rounded-[8px] border border-navy/8 p-8 flex flex-col gap-6"
        style={{ maxWidth: "400px" }}
      >
        {/* Brand */}
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold text-navy">Mobaryn</span>
          <p className="text-sm text-navy/50">Masuk ke panel admin</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-navy/60">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full px-3 py-2 text-sm rounded-[6px] border border-navy/8 bg-white text-navy placeholder:text-navy/30 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-medium text-navy/60">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm rounded-[6px] border border-navy/8 bg-white text-navy placeholder:text-navy/30 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2.5 text-sm font-medium text-white bg-primary rounded-[6px] hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Masuk
          </button>
        </form>

        <p className="text-xs text-navy/30 text-center italic">
          ⚠ Ini adalah login sementara — menerima input apa saja. Belum terhubung ke autentikasi asli.
        </p>
      </div>
    </div>
  )
}
