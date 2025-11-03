import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms of <span className="gradient-text">Service</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Last updated: November 2025
          </motion.p>

          <motion.div 
            className="prose prose-lg max-w-none text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using DeployX, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use DeployX for personal and commercial purposes. 
              This license shall automatically terminate if you violate any of these restrictions.
            </p>

            <h2>Service Availability</h2>
            <p>
              We strive to maintain high availability of our services but do not guarantee 
              uninterrupted access. Scheduled maintenance may occur with prior notice.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials 
              and for all activities that occur under your account.
            </p>

            <h2>Prohibited Uses</h2>
            <p>
              You may not use our service for any unlawful purpose or to solicit others to perform 
              unlawful acts. You may not violate any international, federal, provincial, or state laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              DeployX shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of the service.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at 
              legal@deployx.dev.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}