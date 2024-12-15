import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md">
            <form className="space-y-4">
              <Input placeholder="Name" className="border-indigo-200 focus:border-indigo-500" />
              <Input type="email" placeholder="Email" className="border-indigo-200 focus:border-indigo-500" />
              <Textarea placeholder="Message" className="border-indigo-200 focus:border-indigo-500" />
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Send Message</Button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image src="/placeholder.svg" alt="Office Location" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

