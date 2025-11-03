import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogHero from '../components/BlogHero'
import BlogPosts from '../components/BlogPosts'

export default function Blog() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </div>
  )
}