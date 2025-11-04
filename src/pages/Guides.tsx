import Header from '../components/Header'
import Footer from '../components/Footer'
import PlatformGuides from '../components/PlatformGuides'
import FrameworkTutorials from '../components/FrameworkTutorials'
import AdvancedWorkflows from '../components/AdvancedWorkflows'
import TroubleshootingGuide from '../components/TroubleshootingGuide'

export default function Guides() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Guides</h1>
          <p className="text-xl text-gray-400 mb-12">
            Step-by-step tutorials and best practices for deploying with DeployX.
          </p>
          
          <PlatformGuides />
          <FrameworkTutorials />
          <AdvancedWorkflows />
          <TroubleshootingGuide />
        </div>
      </div>
      <Footer />
    </div>
  )
}
