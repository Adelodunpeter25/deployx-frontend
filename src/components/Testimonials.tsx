import { Star, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior DevOps Engineer',
    company: 'TechCorp',
    content: 'DeployX transformed our deployment process. What used to take hours now takes minutes. The reliability is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'The developer experience is incredible. Our team can focus on building features instead of managing infrastructure.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
  },
  {
    name: 'Emily Watson',
    role: 'Full Stack Developer',
    company: 'InnovateLab',
    content: 'Git integration and automatic deployments saved us countless hours. The preview environments are a game changer.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
  }
]

const companies = [
  'TechCorp', 'StartupXYZ', 'InnovateLab', 'DevStudio', 'CloudFirst', 'ScaleUp'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What developers
            <span className="gradient-text block">are saying</span>
          </h2>
          <p className="text-xl text-gray-400">
            Real feedback from teams using DeployX in production
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="card group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Github className="w-6 h-6 text-gray-400" />
            <span className="text-2xl font-bold gradient-text">12.5k</span>
            <span className="text-gray-400">GitHub Stars</span>
          </motion.div>
          
          <p className="text-gray-400 mb-8">Trusted by companies worldwide</p>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={company}
                className="text-gray-500 font-medium text-lg hover:text-gray-300 transition-colors"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  color: '#d1d5db',
                  transition: { duration: 0.2 }
                }}
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}