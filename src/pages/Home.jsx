import { Link } from "react-router-dom"

const userId = 100

function Home() {
  return (
    <div>
      <h1>App</h1>
      <Link to={`/users/${userId}`}>Users</Link>
    </div>
  )
}

export default Home
