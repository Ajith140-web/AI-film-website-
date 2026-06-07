export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-400 text-lg">No projects yet. Create your first project!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-blue-500 transition">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {new Date(project.createdAt).toLocaleDateString()}
            </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}