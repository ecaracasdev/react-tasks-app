import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import NotFound from "./components/NotFound"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import UserPage from "./pages/UsersPage"
import Dashboard from "./pages/Dashboard"
import { useState } from "react"
import { Landing } from "./pages"
import { ProtectedRoute } from "./components/ProtectedRoute"
import Analitycs from "./pages/Analitycs"
import Admin from "./pages/Admin"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-500">
      <div className="container mx-auto">
        <BrowserRouter basename="/react-tasks-app/">
          {/* <NavBar /> */}
          <Routes>
            {/* <Route index path="/" element={<Landing />} />
            <Route path="/landing" element={<Landing />} /> */}
            <Route index path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard/*" element={<Dashboard />}>
                <Route path="welcome" element={<p>welcome</p>} />
                <Route path="goodbye" element={<p>goodbye</p>} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/usuarios" element={<Navigate to="/users" />} />
              <Route path="/users/:id" element={<UserPage />} />
            </Route>
            {/* <Route
              path="/analitycs"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("analize")}
                  redirectTo="/home"
                >
                  <Analitycs />
                </ProtectedRoute>
              }
            /> */}

            {/* <Route
              path="/admin"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permissions.includes("admin")}
                  redirectTo="/dashboard"
                >
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route /> */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
