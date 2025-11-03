import { motion } from 'framer-motion'
import { Terminal, Settings, RotateCcw, Eye, Zap, Copy } from 'lucide-react'
import { useState } from 'react'

const commandCategories = [
  {
    title: 'Deployment Commands',
    icon: Zap,
    commands: [
      {
        command: 'deployx deploy',
        description: 'Auto-detect and deploy your project'
      },
      {
        command: 'deployx deploy --dry-run',
        description: 'Preview deployment without executing'
      },
      {
        command: 'deployx deploy --force',
        description: 'Skip confirmations and deploy'
      },
      {
        command: 'deployx interactive',
        description: 'Guided setup and deployment'
      }
    ]
  },
  {
    title: 'Setup & Configuration',
    icon: Settings,
    commands: [
      {
        command: 'deployx init',
        description: 'Initialize project configuration'
      },
      {
        command: 'deployx config show',
        description: 'View current configuration'
      },
      {
        command: 'deployx config edit',
        description: 'Edit configuration file'
      },
      {
        command: 'deployx config validate',
        description: 'Validate configuration'
      }
    ]
  },
  {
    title: 'Monitoring & Management',
    icon: Eye,
    commands: [
      {
        command: 'deployx status',
        description: 'Check deployment status'
      },
      {
        command: 'deployx logs --follow',
        description: 'Stream deployment logs in real-time'
      },
      {
        command: 'deployx history --limit 10',
        description: 'View deployment history'
      }
    ]
  },
  {
    title: 'Rollback & Recovery',
    icon: RotateCcw,
    commands: [
      {
        command: 'deployx rollback',
        description: 'Interactive rollback selection'
      },
      {
        command: 'deployx rollback --target 2',
        description: 'Rollback to specific deployment'
      }
    ]
  }
]

export default function CommandReference() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

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
            Command <span className="gradient-text">Reference</span>
          </h2>
          <p className="text-xl text-gray-400">
            Complete list of DeployX CLI commands and their usage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {commandCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                className="card h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4 flex-grow">
                  {category.commands.map((cmd, index) => (
                    <div key={index} className="border-l-2 border-primary-500/30 pl-4">
                      <div className="bg-dark-800 rounded-lg p-3 mb-2 flex items-center justify-between gap-3">
                        <code className="text-primary-400 font-mono text-sm flex-1 break-all">
                          {cmd.command}
                        </code>
                        <button
                          onClick={() => copyToClipboard(cmd.command)}
                          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                        >
                          {copiedCommand === cmd.command ? (
                            <span className="text-green-400 text-xs">Copied!</span>
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm">{cmd.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Use <code className="text-primary-400">deployx [command] --help</code> for detailed options
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}