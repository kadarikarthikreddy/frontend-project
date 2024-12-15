import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import Features from '@/components/Features'
import GadgetListing from '@/components/GadgetListing'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Navbar />
      <HeroBanner />
      <Features />
      <GadgetListing />
      <ContactUs />
      <Footer />
    </div>
  )
}

