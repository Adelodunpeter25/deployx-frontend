import { TrendingUp, Clock, CheckCircle, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Active Developers',
    description: 'Trust DeployX daily'
  },
  {
    icon: CheckCircle,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'Guaranteed reliability'
  },
  {
    icon: Clock,
    value: 30,
    suffix: 's',
    label: 'Deploy Time',
    description: 'Average deployment'
  },
  {
    icon: TrendingUp,
    value: 500,
    suffix: 'M+',
    label: 'Deployments',
    description: 'Successfully completed'
  }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-dark-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by developers
            <span className="gradient-text block">worldwide</span>
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of teams shipping faster with DeployX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                
                <h3 className="text-xl font-semibold mt-2 mb-1 text-white">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}