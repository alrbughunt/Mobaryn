// TODO: ganti dengan Supabase Auth session di tahap integrasi
import { useAuthContext } from "./AuthContext"

export function useAuth() {
  return useAuthContext()
}
