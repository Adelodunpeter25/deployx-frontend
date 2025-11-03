import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <ContactHero />
      
      {/* Two Column Layout */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Details */}
            <div>
              <ContactInfo />
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}