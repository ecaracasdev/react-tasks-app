import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Alert } from "./Alert"

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [ error, setError ] = useState()

  const { signup }= useAuth()
  const navigate = useNavigate()


  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/home')
    } catch (error) {
      setError(error.message)
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
        <button>Register</button>
      </form>
    </div>
  )
}
