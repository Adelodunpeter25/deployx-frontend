import { Zap, Shield, Globe, Code, GitBranch, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy in seconds with our optimized build pipeline and global CDN distribution.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with automated vulnerability scanning and compliance monitoring.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Auto-scaling infrastructure across 15+ regions worldwide for optimal performance.'
  },
  {
    icon: Code,
    title: 'Developer First',
    description: 'Intuitive CLI, comprehensive APIs, and seamless integration with your workflow.'
  },
  {
    icon: GitBranch,
    title: 'Git Integration',
    description: 'Automatic deployments from GitHub, GitLab, and Bitbucket with branch previews.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor performance, track deployments, and optimize with detailed insights.'
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
            Everything you need to
            <span className="gradient-text block">deploy with confidence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed for modern development teams who demand reliability and speed.
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