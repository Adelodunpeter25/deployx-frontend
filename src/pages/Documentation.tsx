import Header from '../components/Header'
import Footer from '../components/Footer'
import DocsHero from '../components/DocsHero'
import QuickStart from '../components/QuickStart'
import CommandReference from '../components/CommandReference'
import ProTips from '../components/ProTips'
import PlatformGuides from '../components/PlatformGuides'
import FAQReference from '../components/FAQReference'

export default function Documentation() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <DocsHero />
      <QuickStart />
      <CommandReference />
      <ProTips />
      <PlatformGuides />
      <FAQReference />
      <Footer />
    </div>
  )
}