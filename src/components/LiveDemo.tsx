import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Play } from 'lucide-react'

const platforms = [
  { name: 'Vercel', url: 'your-app.vercel.app', recommended: true, token: 'VERCEL_TOKEN' },
  { name: 'GitHub Pages', url: 'username.github.io/your-app', recommended: false, token: 'GITHUB_TOKEN' },
  { name: 'Netlify', url: 'your-app.netlify.app', recommended: false, token: 'NETLIFY_TOKEN' },
  { name: 'Render', url: 'your-app.onrender.com', recommended: false, token: 'RENDER_TOKEN' },
  { name: 'Railway', url: 'your-app.railway.app', recommended: false, token: 'RAILWAY_TOKEN' }
]

const asciiArt = [
  '██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗██╗  ██╗',
  '██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝╚██╗██╔╝',
  '██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝  ╚███╔╝ ',
  '██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝   ██╔██╗ ',
  '██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║   ██╔╝ ██╗',
  '╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝'
]

export default function LiveDemo() {
  const [lines, setLines] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [showPlatformSelect, setShowPlatformSelect] = useState(false)
  const [showTokenInput, setShowTokenInput] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState(0)
  const [tokenValue, setTokenValue] = useState('')
  const terminalRef = useRef<HTMLDivElement>(null)
  const selectedPlatformRef = useRef<number>(0)

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showPlatformSelect) {
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedPlatform(prev => prev > 0 ? prev - 1 : platforms.length - 1)
        } else if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedPlatform(prev => prev < platforms.length - 1 ? prev + 1 : 0)
        } else if (e.key === 'Enter') {
          selectedPlatformRef.current = selectedPlatform
          setShowPlatformSelect(false)
          continueAfterPlatform(selectedPlatform)
        }
      }

      if (showTokenInput) {
        if (e.key === 'Enter') {
          setShowTokenInput(false)
          continueAfterToken(selectedPlatformRef.current)
        } else if (e.key.length === 1 || e.key === 'Backspace') {
          // Simulate typing
          if (e.key === 'Backspace') {
            setTokenValue(prev => prev.slice(0, -1))
          } else {
            setTokenValue(prev => prev + '*')
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showPlatformSelect, showTokenInput])

  const addLine = (text: string, delay = 1000) => {
    return new Promise(resolve => {
      setTimeout(() => {
        setLines(prev => [...prev, text])
        resolve(void 0)
      }, delay)
    })
  }

  const continueAfterPlatform = async (platformIndex: number) => {
    const currentPlatform = platforms[platformIndex]
    await addLine(`✅ ${currentPlatform.name} selected`)
    await addLine(`Enter ${currentPlatform.token}:`)
    setTokenValue('')
    setShowTokenInput(true)
  }

  const continueAfterToken = async (platformIndex: number) => {
    const currentPlatform = platforms[platformIndex]
    await addLine('💾 Token saved')
    await addLine('📝 Automatically added to .gitignore')
    await addLine('✅ Token authenticated')
    await addLine('🔧 Checking environment variables...')
    await addLine('📦 Installing dependencies with npm...')
    await addLine('⚡ Dependencies installed (2.3s)')
    await addLine('🏗️  Running: npm run build')
    await addLine('📦 Build completed successfully')
    await addLine(`🚀 Deploying to ${currentPlatform.name}...`)
    await addLine('✨ Deployment successful!')
    await addLine(`🌐 https://${currentPlatform.url}`)
    setIsRunning(false)
  }

  const startDemo = async () => {
    setLines([])
    setIsRunning(true)
    setShowPlatformSelect(false)
    setShowTokenInput(false)

    // Show ASCII art first
    for (const line of asciiArt) {
      await addLine(line, 200)
    }
    
    await addLine('', 500) // Empty line
    await addLine('$ deployx deploy', 500)
    await addLine('🔍 Scanning project structure...')
    await addLine('📁 Found: pages/, components/, next.config.js')
    await addLine('✅ Next.js app detected')
    await addLine('Select deployment platform:')
    setShowPlatformSelect(true)
  }

  const getLineColor = (line: string) => {
    if (line.includes('██') || line.includes('╗') || line.includes('╚')) return 'text-primary-400'
    if (line.includes('$')) return 'text-green-400'
    if (line.includes('✅') || line.includes('✨')) return 'text-green-400'
    if (line.includes('🌐')) return 'text-blue-400'
    if (line.includes('📁') || line.includes('🔧')) return 'text-yellow-400'
    if (line.includes('⚡')) return 'text-purple-400'
    if (line.includes('Select') || line.includes('Enter')) return 'text-cyan-400'
    return 'text-gray-300'
  }

  return (
    <section className="py-32 bg-dark-900 hidden md:block">
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
            Interactive terminal demo - use arrow keys when prompted
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
                <span className="text-sm text-gray-300">Interactive Terminal</span>
              </div>
              <button
                onClick={startDemo}
                disabled={isRunning}
                className="flex items-center space-x-2 px-3 py-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 text-white text-sm rounded transition-colors"
              >
                <Play className="w-3 h-3" />
                <span>{isRunning ? 'Running...' : 'Start Demo'}</span>
              </button>
            </div>
            
            <div ref={terminalRef} className="p-6 font-mono text-sm h-[400px] overflow-y-auto">
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mb-2 ${getLineColor(line)}`}
                >
                  {line}
                </motion.div>
              ))}

              {/* Platform Selection */}
              {showPlatformSelect && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4 mb-2"
                >
                  {platforms.map((platform, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedPlatform === index
                          ? 'text-blue-400 bg-gray-800'
                          : 'text-gray-500'
                      } px-2 py-1 rounded flex items-center justify-between`}
                    >
                      <span>
                        {selectedPlatform === index ? '→' : ' '} {platform.name}
                      </span>
                      {platform.recommended && (
                        <span className="text-green-400 text-xs ml-2">(recommended)</span>
                      )}
                    </div>
                  ))}
                  <div className="text-gray-500 text-xs mt-1">
                    Use ↑↓ arrows and Enter to select
                  </div>
                </motion.div>
              )}

              {/* Token Input */}
              {showTokenInput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4 mb-2"
                >
                  <div className="text-gray-300">
                    {tokenValue}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    Type your token and press Enter (input will be masked)
                  </div>
                </motion.div>
              )}

              {/* Cursor */}
              {isRunning && !showPlatformSelect && !showTokenInput && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-gray-300"
                >
                  |
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
