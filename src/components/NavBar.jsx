import { NavLink } from "react-router-dom"
import "../components/navbar.css"

function NavBar() {
  return (
    <nav>
      <div>
        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/home"
              >
                home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/users"
              >
                users
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/dashboard"
              >
                dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/analitycs"
              >
                analitycs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/admin"
              >
                admin
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
