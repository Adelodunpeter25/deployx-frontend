import { motion } from 'framer-motion'
import { Copy, Download, Terminal, Zap } from 'lucide-react'
import { useState } from 'react'

const installCommands = [
  {
    title: 'Quick Install (Recommended)',
    command: "curl -fsSL https://raw.githubusercontent.com/Adelodunpeter25/deployx/main/install.sh | bash",
    icon: Zap
  },
  {
    title: 'Install with pip',
    command: "pip install deployx",
    icon: Download
  },
  {
    title: 'Install with uv',
    command: "uv add deployx",
    icon: Terminal
  }
]

export default function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

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
            Quick <span className="gradient-text">Start</span>
          </h2>
          <p className="text-xl text-gray-400">
            Get up and running with DeployX in under a minute
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Installation</h3>
            <div className="space-y-4">
              {installCommands.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-primary-400" />
                      <h4 className="font-medium text-white">{item.title}</h4>
                    </div>
                    <div className="bg-dark-800 rounded-lg p-4 flex items-start justify-between gap-4">
                      <code className="text-primary-400 font-mono text-sm flex-1 break-all overflow-hidden">
                        {item.command}
                      </code>
                      <button
                        onClick={() => copyToClipboard(item.command, index)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedIndex === index ? (
                          <span className="text-green-400 text-sm">Copied!</span>
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* First Deployment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">First Deployment</h3>
            <div className="card">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">1. Navigate to your project</h4>
                  <div className="bg-dark-800 rounded-lg p-3">
                    <code className="text-primary-400 font-mono">cd my-project</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">2. Deploy in one command</h4>
                  <div className="bg-dark-800 rounded-lg p-3">
                    <code className="text-primary-400 font-mono">deployx deploy</code>
                  </div>
                </div>

                <div className="bg-primary-900/20 border border-primary-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-primary-300 mb-2">🎉 That's it!</h4>
                  <p className="text-gray-300 text-sm">
                    DeployX will auto-detect your project, configure build settings, 
                    handle environment variables, and deploy your project with a live URL.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}