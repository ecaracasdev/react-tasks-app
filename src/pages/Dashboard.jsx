import { useNavigate, Link, Outlet } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }

  return (
    <div>
      <button onClick={handleClick}>go to landing</button>
      <br/>
      <Link to="welcome">say welcome</Link>
      <br/>
      <Link to="goodbye">say goodbye</Link>
      <br/>
      <Outlet />
    </div>
  )
}

export default Dashboard
