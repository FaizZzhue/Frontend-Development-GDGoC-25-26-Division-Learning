import { NavLink } from "react-router-dom"

const linkClass =
  "px-3 py-2 rounded-md text-sm font-medium"

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto flex gap-4 p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-500 text-white" : "text-gray-600"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-500 text-white" : "text-gray-600"}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-500 text-white" : "text-gray-600"}`
          }
        >
          Dashboard
        </NavLink>
      </div>
    </nav>
  )
}