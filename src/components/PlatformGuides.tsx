import { motion } from 'framer-motion'
import { Github, Globe, Zap, Train, Server, ExternalLink, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const platforms = [
  {
    name: 'GitHub Pages',
    icon: Github,
    description: 'Deploy static sites directly to GitHub Pages',
    tokenUrl: 'https://github.com/settings/tokens',
    permissions: ['repo', 'workflow'],
    color: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Vercel',
    icon: Zap,
    description: 'Deploy modern web applications with zero configuration',
    tokenUrl: 'https://vercel.com/account/tokens',
    permissions: ['Full access'],
    color: 'from-black to-gray-800'
  },
  {
    name: 'Netlify',
    icon: Globe,
    description: 'Build, deploy, and manage modern web projects',
    tokenUrl: 'https://app.netlify.com/user/applications#personal-access-tokens',
    permissions: ['Full access'],
    color: 'from-teal-600 to-teal-700'
  },
  {
    name: 'Railway',
    icon: Train,
    description: 'Deploy applications with automatic scaling',
    tokenUrl: 'https://railway.app/account/tokens',
    permissions: ['Full access'],
    color: 'from-purple-600 to-purple-700'
  },
  {
    name: 'Render',
    icon: Server,
    description: 'Cloud platform for developers and teams',
    tokenUrl: 'https://dashboard.render.com/account/api-keys',
    permissions: ['Full access'],
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Request Platform',
    icon: Plus,
    description: "Don't see your platform? Let us know!",
    tokenUrl: '/contact',
    permissions: ['Community driven'],
    color: 'from-green-600 to-green-700',
    isInternal: true
  }
]

export default function PlatformGuides() {
  return (
    <section className="py-16 px-6 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platform <span className="gradient-text">Setup</span>
          </h2>
          <p className="text-xl text-gray-400">
            Get your API tokens and configure deployment platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.div
                key={platform.name}
                className="card group hover:scale-105 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {platform.name}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {platform.description}
                </p>

                <div className="mb-4 flex-grow">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Required Permissions:</h4>
                  <div className="flex flex-wrap gap-1">
                    {platform.permissions.map((permission, i) => (
                      <span key={i} className="bg-dark-800 text-primary-400 text-xs px-2 py-1 rounded">
                        {permission}
                      </span>
                    ))}
                  </div>
                </div>

                {platform.isInternal ? (
                  <Link
                    to={platform.tokenUrl}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    Contact Us
                    <Plus className="w-3 h-3" />
                  </Link>
                ) : (
                  <a
                    href={platform.tokenUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    Get API Token
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          className="mt-12 card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">🔐 Token Security</h3>
          <div className="space-y-3 text-gray-300">
            <p>• Tokens are saved securely in your local configuration</p>
            <p>• Configuration files are automatically added to <code className="text-primary-400 bg-dark-800 px-1 rounded">.gitignore</code></p>
            <p>• DeployX will prompt for tokens during first-time setup</p>
            <p>• You can update tokens anytime with <code className="text-primary-400 bg-dark-800 px-1 rounded">deployx config edit</code></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}