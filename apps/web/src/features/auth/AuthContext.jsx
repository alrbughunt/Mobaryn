import { createContext, useContext, useState } from "react"

// TODO: ganti dengan Supabase Auth asli di tahap integrasi

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // Intentionally NOT persisted — resets on page refresh to make clear this is not real auth
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function login() {
    setIsAuthenticated(true)
  }

  function logout() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
