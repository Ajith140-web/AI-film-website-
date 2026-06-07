import { useState } from 'react'

export default function UploadModal({ onClose, onSuccess }) {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!file || !title) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)
    try {
      // TODO: Implement actual file upload
      const formData = new FormData()
      formData.append('file', file)
      formData.append('title', title)
      formData.append('description', description)

      // const response = await fetch('/api/screenplay/upload', {
      //   method: 'POST',
      //   body: formData
      // })

      if (true) { // Replace with actual response check
        onSuccess()
      }
    } catch (err) {
      setError('Error uploading file')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">New Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Project Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-4 py-2 border border-gray-600 focus:border-blue-500 outline-none"
              placeholder="Enter project title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-4 py-2 border border-gray-600 focus:border-blue-500 outline-none"
              placeholder="Enter project description"
              rows="3"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Upload Screenplay *
            </label>
            <input
              type="file"
              accept=".txt,.pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full bg-gray-700 text-white rounded px-4 py-2 border border-gray-600"
            />
            <p className="text-gray-400 text-sm mt-2">Accepted formats: TXT, PDF</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500 text-white rounded text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}