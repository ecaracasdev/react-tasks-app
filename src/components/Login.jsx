import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [ error, setError ] = useState(null)

  const { login }= useAuth()
  const navigate = useNavigate()


  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
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
    </div>
  )
}
