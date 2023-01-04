import { createContext, useState, useEffect, useContext } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { auth } from "../firebase"

export const AuthContext = createContext()

export const useAuth = () => {
  const authContext = useContext(AuthContext)
  return authContext
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
