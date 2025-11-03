import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const faqData = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I install DeployX?',
        answer: 'You can install DeployX using curl: `curl -fsSL https://raw.githubusercontent.com/Adelodunpeter25/deployx/main/install.sh | bash` or with pip: `pip install deployx`'
      },
      {
        question: 'What frameworks does DeployX support?',
        answer: 'DeployX supports React, Vue, Next.js, Angular, Django, Flask, FastAPI, and many more. It auto-detects your framework and configures the deployment accordingly.'
      },
      {
        question: 'Do I need to create configuration files?',
        answer: 'No! DeployX uses zero configuration. It auto-detects your project type, build settings, and package manager. Configuration files are only needed for custom setups.'
      }
    ]
  },
  {
    category: 'Deployment Issues',
    questions: [
      {
        question: 'My deployment failed. How do I debug?',
        answer: 'Use `deployx logs --follow` to stream deployment logs in real-time. Check for build errors, missing dependencies, or environment variable issues.'
      },
      {
        question: 'Environment variables are not working',
        answer: 'Ensure your .env file is in the project root. DeployX will prompt to configure them during deployment. You can also manually set them with `deployx config edit`.'
      },
      {
        question: 'Build command not found',
        answer: 'DeployX auto-detects build commands from package.json or requirements.txt. For custom builds, create a deployx.yml file with your build configuration.'
      }
    ]
  },
  {
    category: 'Platform Specific',
    questions: [
      {
        question: 'GitHub Pages deployment not working',
        answer: 'Ensure your GitHub token has `repo` and `workflow` permissions. Check that GitHub Pages is enabled in your repository settings.'
      },
      {
        question: 'Vercel deployment is slow',
        answer: 'Vercel deployments are usually fast. Check your build command and ensure you\'re not installing unnecessary dependencies. Use `deployx deploy --dry-run` to preview.'
      },
      {
        question: 'Render service creation failed',
        answer: 'Verify your Render API key has full access permissions. DeployX automatically creates services, but manual creation might be needed for complex setups.'
      }
    ]
  },
  {
    category: 'Configuration',
    questions: [
      {
        question: 'How do I customize build settings?',
        answer: 'Create a `deployx.yml` file in your project root. Specify custom build commands, output directories, and platform-specific settings.'
      },
      {
        question: 'Can I deploy to multiple platforms?',
        answer: 'Yes! Run `deployx deploy` and select different platforms, or create multiple configuration profiles in your deployx.yml file.'
      },
      {
        question: 'How do I rollback a deployment?',
        answer: 'Use `deployx rollback` for interactive rollback selection, or `deployx rollback --target 2` to rollback to a specific deployment number.'
      }
    ]
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/docs" 
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Documentation
          </Link>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Common questions and troubleshooting solutions for DeployX
          </motion.p>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemId = `${category.category}-${index}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div key={itemId} className="card">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <h3 className="text-lg font-medium text-white pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-700"
                          >
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 card text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Still need help?</h3>
            <p className="text-gray-400 mb-6">
              Can't find what you're looking for? Get in touch with our support team.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Support
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}