import { motion } from 'framer-motion'
import { Code, ArrowRight } from 'lucide-react'

const tutorials = [
  {
    title: 'Next.js SSG Deployment',
    description: 'Deploy static Next.js applications with automatic optimization',
    difficulty: 'Beginner',
    duration: '5 min',
    steps: ['Configure next.config.js', 'Set up static export', 'Deploy with DeployX']
  },
  {
    title: 'Django with PostgreSQL',
    description: 'Full-stack Django deployment with database integration',
    difficulty: 'Intermediate',
    duration: '15 min',
    steps: ['Database setup', 'Environment configuration', 'Production deployment']
  },
  {
    title: 'React SPA with Environment Variables',
    description: 'Single-page application deployment with secure env management',
    difficulty: 'Beginner',
    duration: '8 min',
    steps: ['Environment setup', 'Build configuration', 'Secure deployment']
  }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-400 bg-green-400/10'
    case 'Intermediate':
      return 'text-yellow-400 bg-yellow-400/10'
    case 'Advanced':
      return 'text-red-400 bg-red-400/10'
    default:
      return 'text-gray-400 bg-gray-400/10'
  }
}

export default function FrameworkTutorials() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Code className="w-8 h-8 mr-3 text-primary-400" />
        Framework Tutorials
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={tutorial.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-lg border border-gray-800 p-6 hover:border-primary-600/50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                {tutorial.difficulty}
              </span>
              <span className="text-sm text-gray-400">{tutorial.duration}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
              {tutorial.title}
            </h3>
            
            <p className="text-gray-400 mb-4">{tutorial.description}</p>
            
            <div className="space-y-2 mb-4">
              {tutorial.steps.map((step, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-500">
                  <span className="w-5 h-5 rounded-full bg-primary-600/20 text-primary-400 text-xs flex items-center justify-center mr-3">
                    {idx + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
            
            <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300">
              Start Tutorial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
