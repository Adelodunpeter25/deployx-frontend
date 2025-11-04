import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const issues = [
  {
    problem: 'Build Command Not Found',
    severity: 'high',
    solution: 'Ensure your package.json contains the correct build script. DeployX auto-detects common patterns like "build", "dist", or "compile".',
    steps: [
      'Check package.json for build scripts',
      'Verify dependencies are installed',
      'Use custom build command in deployx.yml if needed'
    ]
  },
  {
    problem: 'Environment Variables Not Working',
    severity: 'medium',
    solution: 'Environment variables must be properly configured for each platform. Check your .env file and platform-specific settings.',
    steps: [
      'Verify .env file exists in project root',
      'Check platform token permissions',
      'Ensure variables are set in platform dashboard'
    ]
  },
  {
    problem: 'Deployment Timeout',
    severity: 'medium',
    solution: 'Large projects or slow build processes may timeout. Optimize your build or increase timeout limits.',
    steps: [
      'Optimize build process and dependencies',
      'Use build caching when available',
      'Consider splitting large deployments'
    ]
  },
  {
    problem: 'Platform Authentication Failed',
    severity: 'high',
    solution: 'Invalid or expired platform tokens will cause authentication failures. Regenerate and update your tokens.',
    steps: [
      'Check token expiration date',
      'Regenerate token in platform dashboard',
      'Update token in DeployX configuration'
    ]
  }
]

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'high':
      return <XCircle className="w-5 h-5 text-red-400" />
    case 'medium':
      return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    case 'low':
      return <CheckCircle className="w-5 h-5 text-green-400" />
    default:
      return <AlertTriangle className="w-5 h-5 text-yellow-400" />
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return 'text-red-400 bg-red-400/10'
    case 'medium':
      return 'text-yellow-400 bg-yellow-400/10'
    case 'low':
      return 'text-green-400 bg-green-400/10'
    default:
      return 'text-yellow-400 bg-yellow-400/10'
  }
}

export default function TroubleshootingGuide() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Troubleshooting</h2>
      <p className="text-gray-400 mb-8">
        Common issues and solutions for DeployX deployments. Find quick fixes for the most frequent problems.
      </p>
      
      <div className="space-y-6">
        {issues.map((issue, index) => (
          <motion.div
            key={issue.problem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-lg border border-gray-800 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {getSeverityIcon(issue.severity)}
                <h3 className="text-xl font-semibold ml-3">{issue.problem}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getSeverityColor(issue.severity)}`}>
                {issue.severity}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4">{issue.solution}</p>
            
            <div>
              <h4 className="font-semibold mb-3 text-primary-400">Solution Steps:</h4>
              <ol className="space-y-2">
                {issue.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="w-6 h-6 bg-primary-600/20 text-primary-400 rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
