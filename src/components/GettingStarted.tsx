import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function GettingStarted() {
  const [copied, setCopied] = useState(false)
  const installCommand = 'curl -fsSL https://raw.githubusercontent.com/Adelodunpeter25/deployx/main/install.sh | bash'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900/20 to-dark-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Deploy?
          </h2>
          <div className="flex items-center justify-center space-x-2 text-primary-400 mb-6">
            <Clock className="w-5 h-5" />
            <span className="text-lg">Deploy your first project in 2 minutes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-dark-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-4 text-left">Install DeployX</h3>
            <div className="flex items-center bg-dark-950 rounded-lg border border-gray-700 overflow-hidden">
              <code className="flex-1 px-4 py-3 text-sm font-mono text-gray-300 text-left">
                {installCommand}
              </code>
              <button
                onClick={copyToClipboard}
                className="px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white transition-colors flex items-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-gray-400">
            Then run <code className="bg-dark-900 px-2 py-1 rounded text-primary-400">deployx deploy</code> in your project directory
          </p>
          
          <Link
            to="/docs"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            <span>View Quick Start Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
