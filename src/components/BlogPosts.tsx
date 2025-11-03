import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with DeployX CLI',
    excerpt: 'Learn how to deploy your first application using our powerful command-line interface.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Tutorial'
  },
  {
    id: 2,
    title: 'Best Practices for Secure Deployments',
    excerpt: 'Essential security considerations when deploying applications to production environments.',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Security'
  },
  {
    id: 3,
    title: 'Introducing Branch Previews',
    excerpt: 'Preview your changes before merging with our new branch preview feature.',
    date: '2024-01-05',
    readTime: '3 min read',
    category: 'Feature'
  }
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

export default function BlogPosts() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="card group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4">
                <span className="text-primary-400 text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}