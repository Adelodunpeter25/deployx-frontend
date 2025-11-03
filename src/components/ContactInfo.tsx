import { motion } from 'framer-motion'
import { Mail, MessageSquare, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch with our team',
    contact: 'hello@deployx.dev'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Available 24/7'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'We typically respond within',
    contact: '2-4 hours'
  }
]

export default function ContactInfo() {
  return (
    <div>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact <span className="gradient-text">Details</span>
      </motion.h2>
      
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <div key={info.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    {info.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-1">
                    {info.description}
                  </p>
                  
                  <p className="text-primary-400 font-medium">
                    {info.contact}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}