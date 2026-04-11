import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <NavLink className="hover:text-blue-500" to="/dashboard">
          Overview
        </NavLink>
        <NavLink className="hover:text-blue-500" to="/dashboard/projects">
          Projects
        </NavLink>
      </div>

      <div className="p-6 bg-white rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}
