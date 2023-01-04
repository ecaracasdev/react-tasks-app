import { Link, Navigate } from "react-router-dom"
import TaskForm from "../components/TaskForm"

const userId = 100

function Home({ user }) {
  return (
    <div>
      <h1>App</h1>
      <TaskForm />
      {/* <Link to={`/users/${userId}`}>Users</Link> */}
    </div>
  )
}

export default Home
