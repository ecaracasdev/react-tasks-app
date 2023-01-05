import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Alert } from "./Alert"

export const ResetPassword = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)

  const { resetPassword } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await resetPassword(user.email)
      setError("enviamos un enlace para recuperar la clave")
    } catch (error) {
      setError(error.message)
      console.error(error)
    }
  }

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            Reset Password
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            {error && <Alert message={error} />}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                onChange={handleChange}
              />
            </div>
            <Link className="text-xs text-purple-600 hover:underline" to="/login">Back to login</Link>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
