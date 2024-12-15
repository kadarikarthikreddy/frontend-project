'use client'

import { useState } from 'react'
import { Laptop, Camera, Gamepad } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ListGadgetModal from './ListGadgetModal'

export default function GadgetListing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [gadgets, setGadgets] = useState([
    { icon: <Laptop className="w-8 h-8 mb-4 text-indigo-600" />, name: "Premium Laptop", price: "$50/week", features: ["Latest Processor", "16GB RAM", "512GB SSD"] },
    { icon: <Camera className="w-8 h-8 mb-4 text-indigo-600" />, name: "DSLR Camera", price: "$75/week", features: ["24MP Sensor", "4K Video", "Multiple Lenses"] },
    { icon: <Gamepad className="w-8 h-8 mb-4 text-indigo-600" />, name: "Gaming Console", price: "$40/week", features: ["4K Gaming", "Online Multiplayer", "Latest Titles"] },
  ])

  const addGadget = (newGadget) => {
    setGadgets([...gadgets, newGadget])
  }

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Available Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gadgets.map((gadget, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-xl bg-white group hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">{gadget.icon}</div>
                  <span className="ml-2 text-indigo-700">{gadget.name}</span>
                </CardTitle>
                <CardDescription className="text-indigo-500 font-semibold">{gadget.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600">
                  {gadget.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Rent Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            onClick={() => setIsModalOpen(true)}
          >
            List Your Gadget for Rent
          </Button>
        </div>
      </div>
      <ListGadgetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddGadget={addGadget} />
    </section>
  )
}

