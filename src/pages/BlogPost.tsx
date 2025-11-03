import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const blogPosts = {
  '1': {
    id: 1,
    title: 'Getting Started with DeployX CLI',
    content: `
      <p>DeployX CLI is a powerful command-line tool that simplifies the deployment process for modern applications. In this tutorial, we'll walk through the basics of getting started with our CLI.</p>
      
      <h2>Installation</h2>
      <p>First, install the DeployX CLI using npm:</p>
      <pre><code>npm install -g deployx-cli</code></pre>
      
      <h2>Authentication</h2>
      <p>Before you can deploy applications, you need to authenticate with your DeployX account:</p>
      <pre><code>deployx login</code></pre>
      
      <h2>Your First Deployment</h2>
      <p>Navigate to your project directory and run:</p>
      <pre><code>deployx deploy</code></pre>
      
      <p>That's it! Your application will be deployed to our global infrastructure.</p>
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Tutorial'
  },
  '2': {
    id: 2,
    title: 'Best Practices for Secure Deployments',
    content: `
      <p>Security should be a top priority when deploying applications to production. Here are essential practices to keep your deployments secure.</p>
      
      <h2>Environment Variables</h2>
      <p>Never hardcode sensitive information in your code. Use environment variables for:</p>
      <ul>
        <li>API keys</li>
        <li>Database credentials</li>
        <li>Third-party service tokens</li>
      </ul>
      
      <h2>HTTPS Everywhere</h2>
      <p>Ensure all communication is encrypted using HTTPS. DeployX automatically provides SSL certificates for all deployments.</p>
      
      <h2>Regular Updates</h2>
      <p>Keep your dependencies up to date to avoid security vulnerabilities.</p>
    `,
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Security'
  },
  '3': {
    id: 3,
    title: 'Introducing Branch Previews',
    content: `
      <p>We're excited to announce branch previews - a new feature that allows you to preview your changes before merging to main.</p>
      
      <h2>How It Works</h2>
      <p>Every time you push to a branch, DeployX automatically creates a preview deployment with a unique URL.</p>
      
      <h2>Benefits</h2>
      <ul>
        <li>Test changes in a production-like environment</li>
        <li>Share previews with team members</li>
        <li>Catch issues before they reach production</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Branch previews are enabled by default for all new projects. For existing projects, enable them in your project settings.</p>
    `,
    date: '2024-01-05',
    readTime: '3 min read',
    category: 'Feature'
  }
}

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts[id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="text-primary-400 text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      
      <Footer />
    </div>
  )
}