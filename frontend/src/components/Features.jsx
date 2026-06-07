export default function Features() {
  const features = [
    {
      title: 'Screenplay Upload',
      description: 'Upload screenplays in TXT or PDF format',
      icon: '📄'
    },
    {
      title: 'AI Generation',
      description: 'Generate realistic films from screenplays',
      icon: '🎥'
    },
    {
      title: 'Real-time Updates',
      description: 'Track generation progress in real-time',
      icon: '⚡'
    },
    {
      title: 'Download & Share',
      description: 'Download or share your generated films',
      icon: '🚀'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}