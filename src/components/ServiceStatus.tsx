import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react'

const services = [
  { name: 'DeployX API', status: 'operational', uptime: '99.9%' },
  { name: 'CLI Downloads', status: 'operational', uptime: '100%' },
  { name: 'Documentation', status: 'operational', uptime: '99.8%' },
  { name: 'Webhook Service', status: 'degraded', uptime: '98.2%' }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-400" />
    case 'degraded':
      return <AlertCircle className="w-5 h-5 text-yellow-400" />
    case 'down':
      return <XCircle className="w-5 h-5 text-red-400" />
    default:
      return <CheckCircle className="w-5 h-5 text-green-400" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'text-green-400'
    case 'degraded':
      return 'text-yellow-400'
    case 'down':
      return 'text-red-400'
    default:
      return 'text-green-400'
  }
}

export default function ServiceStatus() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Service Status</h2>
      
      <div className="grid gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-lg border border-gray-800 p-6 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              {getStatusIcon(service.status)}
              <div>
                <h3 className="font-semibold">{service.name}</h3>
                <p className={`text-sm capitalize ${getStatusColor(service.status)}`}>
                  {service.status}
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-400">30-day uptime</p>
              <p className="font-semibold text-green-400">{service.uptime}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
