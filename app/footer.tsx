import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo variant="white" />
            <p className="text-sm text-white/70 mt-4 mb-4">
              Transforming how individuals, nonprofits, and corporations connect and volunteer.
            </p>
            <p className="text-sm font-bold">FEEL THE VIBE, MAKE A DIFFERENCE!</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="text-white/70 hover:text-secondary">
                  Smart Matching
                </Link>
              </li>
              <li>
                <Link href="/event/post" className="text-white/70 hover:text-secondary">
                  Event Management
                </Link>
              </li>
              <li>
                <Link href="/job/post" className="text-white/70 hover:text-secondary">
                  Job Board
                </Link>
              </li>
              <li>
                <Link href="/register/corporate" className="text-white/70 hover:text-secondary">
                  Corporate Programs
                </Link>
              </li>
              <li>
                <Link href="/ai-dashboard" className="text-white/70 hover:text-secondary">
                  Impact Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/forms" className="text-white/70 hover:text-secondary">
                  Forms
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-secondary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/monetization" className="text-white/70 hover:text-secondary">
                  Monetization
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-white/70 hover:text-secondary">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Get Started</h4>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">© 2023 VOLUNTEERVIBES. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-white/70 hover:text-secondary">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-secondary">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-white/70 hover:text-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
