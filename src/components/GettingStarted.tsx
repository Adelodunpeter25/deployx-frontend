import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ArrowRight, Clock, Terminal } from 'lucide-react'
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
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Deploy?
          </h2>
          <div className="flex items-center justify-center space-x-2 text-primary-400 mb-4">
            <Clock className="w-6 h-6" />
            <span className="text-xl">Deploy your first project in 10 minutes</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Installation Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-xl border border-gray-800 p-8 hover:border-primary-600/50 transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-lg mb-6 mx-auto">
              <Terminal className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Step 1: Install</h3>
            <div className="bg-dark-950 rounded-lg border border-gray-700 overflow-hidden">
              <code className="block px-4 py-4 text-sm font-mono text-gray-300 break-all">
                {installCommand}
              </code>
              <button
                onClick={copyToClipboard}
                className="w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white transition-colors flex items-center justify-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Deploy Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-dark-900 rounded-xl border border-gray-800 p-8 hover:border-primary-600/50 transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-6 mx-auto">
              <ArrowRight className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Step 2: Deploy</h3>
            <p className="text-gray-400 mb-6">
              Navigate to your project directory and run:
            </p>
            <div className="bg-dark-950 rounded-lg border border-gray-700 px-4 py-4 mb-6">
              <code className="text-primary-400 font-mono">deployx deploy</code>
            </div>
            <p className="text-sm text-gray-500">
              That's it! Your app will be live in under 5 minutes.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/docs"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View Complete Guide</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
