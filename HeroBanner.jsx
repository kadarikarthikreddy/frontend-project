import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Rent the Latest Gadgets</h1>
          <p className="text-xl mb-6 animate-fade-in-up animation-delay-200">Experience cutting-edge technology without the commitment. Rent laptops, cameras, and gaming consoles today!</p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-100 animate-fade-in-up animation-delay-400">Explore Rentals</Button>
        </div>
        <div className="md:w-1/2 animate-fade-in-left">
          <Image src="/placeholder.svg" alt="Gadget Rentals" width={600} height={400} className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  )
}

