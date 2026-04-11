import { Outlet, useNavigate } from "react-router-dom"

export default function Projects() {
  const navigate = useNavigate()

  const projects = [
    { id: 1, name: "Portfolio Website" },
    { id: 2, name: "Task Manager" },
  ]

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Projects</h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => navigate(`/dashboard/projects/${project.id}`)}
            className="block p-3 w-full text-left rounded border hover:bg-gray-50"
          >
            {project.name}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  )
}