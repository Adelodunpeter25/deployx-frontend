import { Zap, Shield, Globe, Code, GitBranch, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Zap,
    title: 'Zero Configuration',
    description: 'Auto-detects your project type and build settings. No configuration files needed.'
  },
  {
    icon: Globe,
    title: 'Multiple Platforms',
    description: 'Deploy to GitHub Pages, Vercel, Netlify, Railway, Render with one command.'
  },
  {
    icon: Code,
    title: 'Framework Support',
    description: 'Works with React, Vue, Next.js, Angular, Django, Flask, FastAPI out of the box.'
  },
  {
    icon: GitBranch,
    title: 'Package Manager Detection',
    description: 'Automatically detects npm, yarn, pnpm, bun, pip, poetry, pipenv, and uv.'
  },
  {
    icon: Shield,
    title: 'Environment Variables',
    description: 'Auto-detect .env files and configure them across all deployment platforms.'
  },
  {
    icon: BarChart3,
    title: 'Deployment History',
    description: 'Track past deployments with timestamps, status, and rollback support.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One CLI for
            <span className="gradient-text block">all your deployments</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No more memorizing different CLI tools, configuration formats, or deployment workflows.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="card group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}