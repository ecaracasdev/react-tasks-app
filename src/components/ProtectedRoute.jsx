import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <h1>loading...</h1>
  }

  if (!user) {
    return <Navigate to={redirectTo} />
  }

  return children ? children : <Outlet />
}
