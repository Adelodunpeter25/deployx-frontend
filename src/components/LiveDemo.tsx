import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Play } from 'lucide-react'

const terminalSteps = [
  { text: '$ deployx deploy', delay: 0 },
  { text: '🔍 Detecting project type...', delay: 1000 },
  { text: '✅ React app detected', delay: 1500 },
  { text: '📦 Installing dependencies...', delay: 2000 },
  { text: '🏗️  Building project...', delay: 3000 },
  { text: '🚀 Deploying to Vercel...', delay: 4000 },
  { text: '✨ Deployment successful!', delay: 5000 },
  { text: '🌐 https://your-app.vercel.app', delay: 5500 }
]

export default function LiveDemo() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)

  const startDemo = () => {
    setCurrentStep(-1)
    setIsRunning(true)
    
    terminalSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index)
        if (index === terminalSteps.length - 1) {
          setIsRunning(false)
        }
      }, step.delay)
    })
  }

  return (
    <section className="py-32 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See DeployX in Action
          </h2>
          <p className="text-gray-400 text-lg">
            Watch how easy it is to deploy your project with zero configuration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-950 rounded-lg border border-gray-800 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Terminal</span>
              </div>
              <button
                onClick={startDemo}
                disabled={isRunning}
                className="flex items-center space-x-2 px-3 py-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 text-white text-sm rounded transition-colors"
              >
                <Play className="w-3 h-3" />
                <span>{isRunning ? 'Running...' : 'Run Demo'}</span>
              </button>
            </div>
            
            <div className="p-6 font-mono text-sm min-h-[300px]">
              {terminalSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentStep >= index ? 1 : 0 }}
                  className={`mb-2 ${
                    step.text.includes('$') ? 'text-green-400' :
                    step.text.includes('✅') || step.text.includes('✨') ? 'text-green-400' :
                    step.text.includes('🌐') ? 'text-blue-400' :
                    'text-gray-300'
                  }`}
                >
                  {step.text}
                  {currentStep === index && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
