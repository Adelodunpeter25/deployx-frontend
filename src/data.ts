export interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'down'
  uptime: string
}

export interface PlatformHealth {
  name: string
  status: 'operational' | 'degraded' | 'down'
  responseTime: string
  uptime: string
}

export interface PerformanceMetric {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  description: string
}

export interface Incident {
  title: string
  date: string
  duration: string
  status: 'resolved' | 'investigating' | 'monitoring'
  severity: 'high' | 'medium' | 'low'
  description: string
  resolution: string
}

export const services: ServiceStatus[] = [
  { name: 'DeployX API', status: 'operational', uptime: '99.9%' },
  { name: 'CLI Downloads', status: 'operational', uptime: '100%' },
  { name: 'Documentation', status: 'operational', uptime: '99.8%' },
  { name: 'Webhook Service', status: 'degraded', uptime: '98.2%' }
]

export const platforms: PlatformHealth[] = [
  { name: 'Vercel API', status: 'operational', responseTime: '120ms', uptime: '99.9%' },
  { name: 'Netlify API', status: 'operational', responseTime: '95ms', uptime: '99.8%' },
  { name: 'GitHub API', status: 'degraded', responseTime: '340ms', uptime: '98.5%' },
  { name: 'Render API', status: 'operational', responseTime: '180ms', uptime: '99.7%' },
  { name: 'Railway API', status: 'operational', responseTime: '150ms', uptime: '99.6%' }
]

export const metrics: PerformanceMetric[] = [
  {
    title: 'Average Deployment Time',
    value: '2.4 min',
    change: '-12%',
    trend: 'down',
    description: 'Across all platforms'
  },
  {
    title: 'Success Rate',
    value: '98.7%',
    change: '+2.1%',
    trend: 'up',
    description: 'Last 30 days'
  },
  {
    title: 'Build Time',
    value: '1.8 min',
    change: '-8%',
    trend: 'down',
    description: 'Average build duration'
  },
  {
    title: 'Total Deployments',
    value: '12,847',
    change: '+24%',
    trend: 'up',
    description: 'This month'
  }
]

export const incidents: Incident[] = [
  {
    title: 'GitHub API Rate Limiting',
    date: '2024-10-28',
    duration: '2h 15m',
    status: 'resolved',
    severity: 'medium',
    description: 'Increased API rate limiting caused deployment delays for GitHub Pages deployments.',
    resolution: 'Implemented request queuing and retry logic to handle rate limits gracefully.'
  },
  {
    title: 'Vercel Platform Maintenance',
    date: '2024-10-15',
    duration: '45m',
    status: 'resolved',
    severity: 'low',
    description: 'Scheduled maintenance on Vercel platform affected new deployments.',
    resolution: 'Deployments automatically resumed after maintenance window completed.'
  },
  {
    title: 'CLI Authentication Issue',
    date: '2024-10-08',
    duration: '3h 30m',
    status: 'resolved',
    severity: 'high',
    description: 'Token validation service experienced intermittent failures causing authentication errors.',
    resolution: 'Updated authentication flow with improved error handling and fallback mechanisms.'
  }
]
