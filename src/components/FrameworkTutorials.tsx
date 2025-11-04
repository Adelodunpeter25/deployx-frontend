import { motion } from 'framer-motion'
import { Code, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const tutorials = [
  {
    id: 'nextjs-ssg',
    title: 'Next.js SSG Deployment',
    description: 'Deploy static Next.js applications with automatic optimization',
    difficulty: 'Beginner',
    duration: '5 min',
    steps: ['Configure next.config.js', 'Set up static export', 'Deploy with DeployX'],
    link: '/guides/nextjs-ssg'
  },
  {
    id: 'django-postgresql',
    title: 'Django with PostgreSQL',
    description: 'Full-stack Django deployment with database integration',
    difficulty: 'Intermediate',
    duration: '15 min',
    steps: ['Database setup', 'Environment configuration', 'Production deployment'],
    link: '/guides/django-postgresql'
  },
  {
    id: 'react-spa',
    title: 'React SPA with Environment Variables',
    description: 'Single-page application deployment with secure env management',
    difficulty: 'Beginner',
    duration: '8 min',
    steps: ['Environment setup', 'Build configuration', 'Secure deployment'],
    link: '/guides/react-spa'
  },
  {
    id: 'vue-pwa',
    title: 'Vue.js Progressive Web App',
    description: 'Deploy Vue PWA with service workers and offline support',
    difficulty: 'Intermediate',
    duration: '12 min',
    steps: ['PWA configuration', 'Service worker setup', 'Deployment optimization'],
    link: '/guides/vue-pwa'
  },
  {
    id: 'fastapi-docker',
    title: 'FastAPI with Docker',
    description: 'Containerized FastAPI deployment with automatic scaling',
    difficulty: 'Advanced',
    duration: '20 min',
    steps: ['Docker configuration', 'API optimization', 'Container deployment'],
    link: '/guides/fastapi-docker'
  },
  {
    id: 'angular-universal',
    title: 'Angular Universal SSR',
    description: 'Server-side rendered Angular applications for better SEO',
    difficulty: 'Intermediate',
    duration: '18 min',
    steps: ['SSR setup', 'Universal configuration', 'Performance optimization'],
    link: '/guides/angular-universal'
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
            key={tutorial.id}
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
            
            <div className="space-y-2 mb-6">
              {tutorial.steps.map((step, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-500">
                  <span className="w-5 h-5 rounded-full bg-primary-600/20 text-primary-400 text-xs flex items-center justify-center mr-3">
                    {idx + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
            
            <Link
              to={tutorial.link}
              className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors"
            >
              Start Tutorial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Looking for a specific framework? Check our comprehensive documentation.
        </p>
        <Link
          to="/docs"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
        >
          View All Documentation
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}
