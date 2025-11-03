import Header from '../components/Header'
import Footer from '../components/Footer'
import DocsHero from '../components/DocsHero'
import QuickStart from '../components/QuickStart'
import CommandReference from '../components/CommandReference'
import PlatformGuides from '../components/PlatformGuides'

export default function Documentation() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <DocsHero />
      <QuickStart />
      <CommandReference />
      <PlatformGuides />
      <Footer />
    </div>
  )
}