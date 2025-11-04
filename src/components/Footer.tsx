import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <motion.div 
              className="text-2xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              DeployX
            </motion.div>
            <p className="text-gray-400 mb-4">
              Streamline your deployment process with our powerful, developer-first platform.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: 'Documentation', path: '/docs' },
                { name: 'API Reference', path: '#api' },
                { name: 'Guides', path: '#guides' },
                { name: 'Status', path: '#status' }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Careers', path: '#careers' },
                { name: 'Blog', path: '/blog' }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.path.startsWith('#') ? (
                    <motion.a
                      href={item.path}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.a>
                  ) : (
                    <Link to={item.path}>
                      <motion.span
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 DeployX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { name: 'Privacy Policy', path: '/privacy' },
              { name: 'Terms of Service', path: '/terms' }
            ].map((item, index) => (
              <Link key={item.name} to={item.path}>
                <motion.span
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}