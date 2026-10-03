import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../features/auth/useAuth"

// TODO: ganti dengan Supabase Auth session check di tahap integrasi
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />
  return children ?? <Outlet />
}
