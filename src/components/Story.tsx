import { motion } from 'framer-motion'

export default function Story() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Story</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The journey behind building the future of deployment infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-6 bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-300 space-y-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              DeployX was born from the frustration of remembering different deployment commands 
              for every platform. GitHub Pages uses one workflow, Vercel another, Netlify has its own CLI, 
              and Railway requires yet another approach.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We created a single CLI tool that auto-detects your project and deploys it to any platform 
              with one simple command: <code className="text-primary-400 bg-dark-800 px-2 py-1 rounded">deployx deploy</code>. 
              No configuration files, no platform-specific knowledge required.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Today, DeployX supports multiple platforms and frameworks, with automatic service creation, 
              environment variable management, and deployment history tracking - all from one beautiful CLI.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}