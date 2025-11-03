import Header from '../components/Header'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import Story from '../components/Story'

export default function About() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <Story />
      <Mission />
      <Footer />
    </div>
  )
}