import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-500">
            🎬 AIFilmStudio
          </Link>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-gray-300 hover:text-white">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="text-gray-300 hover:text-white"
                >
                  Login
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
