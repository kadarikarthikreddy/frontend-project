'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          QuickRent
        </div>
        <div className="space-x-4">
          <Button variant="ghost" className="text-blue-600 hover:text-purple-600 transition-colors duration-300">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}

