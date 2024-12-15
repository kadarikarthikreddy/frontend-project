import { Laptop, DollarSign, Truck } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: <Laptop className="w-12 h-12 mb-4 text-indigo-600" />, title: "Wide Variety of Gadgets", description: "From laptops to cameras, we've got all your tech needs covered." },
    { icon: <DollarSign className="w-12 h-12 mb-4 text-indigo-600" />, title: "Affordable Pricing", description: "Enjoy the latest tech without breaking the bank." },
    { icon: <Truck className="w-12 h-12 mb-4 text-indigo-600" />, title: "Quick Delivery", description: "Get your rented gadgets delivered right to your doorstep." },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Why Choose QuickRent?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-white to-indigo-50 group hover:-translate-y-1">
              <div className="transform transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

