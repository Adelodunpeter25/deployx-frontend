import { motion } from 'framer-motion'



export default function ProTips() {

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pro <span className="gradient-text">Tips</span>
          </h2>
          <p className="text-xl text-gray-400">
            Essential tips for optimal deployment experience
          </p>
        </motion.div>



        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">🚀 Auto-Detection</h3>
            <p className="text-gray-300">DeployX automatically detects your framework and creates the optimal configuration. Manual config is only needed for custom setups.</p>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">🔧 Environment Variables</h3>
            <p className="text-gray-300">Place your <code className="text-primary-400 bg-dark-800 px-1 rounded">.env</code> files in the project root. DeployX will prompt to configure them during deployment.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}