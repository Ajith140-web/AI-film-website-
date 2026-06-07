import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProjectList from '../components/ProjectList'
import UploadModal from '../components/UploadModal'

export default function Dashboard() {
  const [projects, setProjects] = useState([])
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetch projects from API
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    setLoading(true)
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/films')
      // const data = await response.json()
      // setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">My Projects</h1>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            New Project
          </button>
        </div>

        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <ProjectList projects={projects} />
        )}

        {showUploadModal && (
          <UploadModal
            onClose={() => setShowUploadModal(false)}
            onSuccess={() => {
              setShowUploadModal(false)
              fetchProjects()
            }}
          />
        )}
      </div>
    </div>
  )
}