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

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-200 to-green-500">
      <div className="container mx-auto">
        <BrowserRouter basename="/react-tasks-app/">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/usuarios" element={<Navigate to="/users" />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="welcome" element={<p>welcome</p>} />
              <Route path="goodbye" element={<p>goodbye</p>} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
