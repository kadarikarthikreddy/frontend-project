'use client'

import { useState } from 'react'
import { Laptop, Camera, Gamepad, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ListGadgetModal({ isOpen, onClose, onAddGadget }) {
  const [gadgetName, setGadgetName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'laptop':
        return <Laptop className="w-8 h-8 mb-4 text-indigo-600" />
      case 'camera':
        return <Camera className="w-8 h-8 mb-4 text-indigo-600" />
      case 'console':
        return <Gamepad className="w-8 h-8 mb-4 text-indigo-600" />
      default:
        return <Smartphone className="w-8 h-8 mb-4 text-indigo-600" />
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newGadget = {
      icon: getCategoryIcon(category),
      name: gadgetName,
      price: `$${price}/week`,
      features: [description]
    }
    onAddGadget(newGadget)
    onClose()
    // Reset form
    setGadgetName('')
    setCategory('')
    setDescription('')
    setPrice('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>List Your Gadget</DialogTitle>
          <DialogDescription>
            Fill out the details below to list your gadget for rent.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            placeholder="Gadget Name" 
            value={gadgetName} 
            onChange={(e) => setGadgetName(e.target.value)} 
            required
          />
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="camera">Camera</SelectItem>
              <SelectItem value="console">Gaming Console</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Textarea 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
          <Input 
            type="number" 
            placeholder="Price per week" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required
          />
          <Button type="submit" className="w-full">List Gadget</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

