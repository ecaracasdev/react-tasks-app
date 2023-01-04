import TaskForm from "../components/TaskForm"
import { useAuth } from "../context/AuthContext"

function Home() {
  const { user, logout, loading } = useAuth()

  const handleClick = async () => {
    await logout()
  }

  if (loading) return <h1>loading...</h1>

  return (
    <div>
      <h1>{user.email}</h1>
      <button onClick={handleClick}>Logout</button>
      <TaskForm />
    </div>
  )
}

export default Home
