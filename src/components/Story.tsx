import { motion } from 'framer-motion'

export default function Story() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Story</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The journey behind building the future of deployment infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-6 bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-300 space-y-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              DeployX was born from the frustration of dealing with complex deployment pipelines 
              and unreliable infrastructure. As developers ourselves, we experienced firsthand 
              the pain of spending more time on deployments than on actual development.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We set out to create a platform that would make deployments as simple as a single 
              command, while maintaining enterprise-grade security and reliability. Today, 
              DeployX represents our vision of what modern deployment infrastructure should be.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We're just getting started, and we're excited to help development teams around 
              the world ship better software, faster.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}