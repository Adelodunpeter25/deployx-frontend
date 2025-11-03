import { motion } from 'framer-motion'
import { Search, Terminal } from 'lucide-react'

export default function DocsHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Documentation</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Everything you need to know about DeployX - from installation to advanced deployment strategies.
        </motion.p>

        <motion.div 
          className="flex justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-dark-800 rounded-lg p-3 flex items-center gap-3 max-w-md w-full">
            <Terminal className="w-5 h-5 text-primary-400" />
            <code className="text-primary-400 font-mono">deployx deploy</code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}