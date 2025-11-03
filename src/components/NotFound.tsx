import { motion } from 'framer-motion'
import { Home, FileX, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileX className="w-12 h-12 text-red-400" />
            </div>
            
            <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Page Not Found</h2>
            <p className="text-xl text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <Link to="/docs" className="btn-secondary inline-flex items-center gap-2">
                <Search className="w-4 h-4" />
                Browse Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}