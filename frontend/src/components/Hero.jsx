import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">
        Transform Screenplays into AI Films
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Generate realistic 2-3 hour films from your screenplays using advanced AI technology
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          to="/dashboard"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded"
        >
          Get Started
        </Link>
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded transition">
          Watch Demo
        </button>
      </div>
    </section>
  )
}