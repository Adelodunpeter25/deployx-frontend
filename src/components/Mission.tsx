import { motion } from 'framer-motion'
import { Target, Users, Zap, Shield } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission Driven',
    description: 'Simplifying deployment processes for developers worldwide'
  },
  {
    icon: Users,
    title: 'Developer First',
    description: 'Built by developers, for developers, with real-world needs in mind'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast deployments without compromising on reliability'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security built into every layer of our platform'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Mission() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            To eliminate the complexity and friction in deployment processes, 
            empowering developers to focus on what they do best - building amazing software.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="card text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}