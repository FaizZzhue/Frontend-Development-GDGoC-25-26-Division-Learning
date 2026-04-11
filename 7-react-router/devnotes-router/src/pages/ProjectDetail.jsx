import { useParams } from "react-router-dom"

export default function ProjectDetail() {
  const { id } = useParams()

  return (
    <div>
      <h2 className="text-xl font-semibold">
        Project Detail
      </h2>

      <p className="text-gray-600 mt-2">
        Project ID: {id}
      </p>
    </div>
  )
}