"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/logo"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <div className="hidden md:flex ml-10 space-x-6">
            <Link href="/#features" className="text-sm font-medium hover:text-secondary">
              Features
            </Link>
            <Link href="/forms" className="text-sm font-medium hover:text-secondary">
              Forms
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-secondary">
              Pricing
            </Link>
            <Link href="/monetization" className="text-sm font-medium hover:text-secondary">
              Monetization
            </Link>
            <Link href="/admin" className="text-sm font-medium hover:text-secondary">
              Admin
            </Link>
            <Link href="/ai-dashboard" className="text-sm font-medium hover:text-secondary">
              AI Dashboard
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-gray-100">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild size="sm" className="bg-black hover:bg-gray-900 text-white">
            <Link href="/register">Sign up</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-6 border-t mt-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/#features" className="text-sm font-medium hover:text-secondary py-2">
              Features
            </Link>
            <Link href="/forms" className="text-sm font-medium hover:text-secondary py-2">
              Forms
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-secondary py-2">
              Pricing
            </Link>
            <Link href="/monetization" className="text-sm font-medium hover:text-secondary py-2">
              Monetization
            </Link>
            <Link href="/admin" className="text-sm font-medium hover:text-secondary py-2">
              Admin
            </Link>
            <Link href="/ai-dashboard" className="text-sm font-medium hover:text-secondary py-2">
              AI Dashboard
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100 w-full">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="bg-black hover:bg-gray-900 text-white w-full">
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
