import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Alert } from "./Alert"

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)

  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await login(user.email, user.password)
      navigate("/home")
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSigninWithGoogle = async () => {
    try {
      await loginWithGoogle()
      navigate("/home")
    } catch (error) {
      console.error(error.message)  
    }
  }

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremai@company.ltd"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        />
        <button>login</button>
      </form>
      <button onClick={handleSigninWithGoogle}>Google</button>
    </div>
  )
}
