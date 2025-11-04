import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceStatus from '../components/ServiceStatus'
import PlatformHealth from '../components/PlatformHealth'
import IncidentHistory from '../components/IncidentHistory'
import PerformanceMetrics from '../components/PerformanceMetrics'

export default function Status() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">System Status</h1>
          <p className="text-xl text-gray-400 mb-12">
            Real-time status and performance metrics for DeployX services.
          </p>
          
          <ServiceStatus />
          <PlatformHealth />
          <PerformanceMetrics />
          <IncidentHistory />
        </div>
      </div>
      <Footer />
    </div>
  )
}
