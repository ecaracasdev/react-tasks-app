import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Alert } from "./Alert"

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)

  const { login, loginWithGoogle, resetPassword } = useAuth()
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

  const handleResetPassword = async () => {
    if (!user.email) return setError("por favor ingresa tu email")
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
            Sign in
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
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
                onChange={handleChange}
              />
            </div>
            <Link
              className="text-xs text-purple-600 hover:underline"
              to="/resetPassword"
            >
              Forget Password?
            </Link>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button
              type="button"
              className="flex items-left justify-left w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
              onClick={handleSigninWithGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                role="presentation"
                data-v-e9db3ad8=""
                className="w-5 h-5 fill-current"
              >
                <g fill="" data-v-e9db3ad8="">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.6 10.2273C19.6 9.51825 19.5364 8.83643 19.4182 8.18188H10V12.0501H15.3818C15.15 13.3001 14.4455 14.3592 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2728 19.6 10.2273Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.99984 19.9999C12.6998 19.9999 14.9635 19.1044 16.618 17.5772L13.3862 15.0681C12.4907 15.6681 11.3453 16.0226 9.99984 16.0226C7.39529 16.0226 5.19075 14.2635 4.40439 11.8999H1.06348V14.4908C2.70893 17.759 6.09075 19.9999 9.99984 19.9999Z"
                    fill="#34A853"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994V5.50903H1.06364C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.99984 3.97727C11.468 3.97727 12.7862 4.48182 13.8226 5.47273L16.6907 2.60455C14.9589 0.990909 12.6953 0 9.99984 0C6.09075 0 2.70893 2.24091 1.06348 5.50909L4.40439 8.1C5.19075 5.73636 7.39529 3.97727 9.99984 3.97727Z"
                    fill="#EA4335"
                  ></path>
                </g>
              </svg>
              <span className="ml-40">Continue with google</span>
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              className="font-medium text-purple-600 hover:underline"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}>
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
      <button onClick={handleSigninWithGoogle}>Google</button> */}
    </div>
  )
}
