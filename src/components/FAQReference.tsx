import { motion } from 'framer-motion'
import { HelpCircle, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FAQReference() {
  return (
    <section className="py-16 px-6 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="card text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need <span className="gradient-text">Help?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Check our comprehensive FAQ section for troubleshooting guides, 
            common issues, and step-by-step solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/faq" 
              className="btn-primary flex items-center gap-2"
            >
              View FAQ
              <ExternalLink className="w-4 h-4" />
            </Link>
            
            <Link 
              to="/contact" 
              className="btn-secondary"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}