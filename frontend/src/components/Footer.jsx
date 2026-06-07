export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">AIFilmStudio</h3>
            <p className="text-gray-400">Generate AI-powered films from screenplays</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@aifilmstudio.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AIFilmStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}