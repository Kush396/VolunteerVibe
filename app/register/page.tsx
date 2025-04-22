import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, Building2, Building } from "lucide-react"

export default function RegisterOptions() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Join Our Volunteer Platform</h1>
        <p className="mt-3 text-muted-foreground">Choose the account type that best fits your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <UserRound className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Volunteer</CardTitle>
            <CardDescription>For individuals looking to donate their time and skills to worthy causes</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Find opportunities matching your skills</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Track your volunteer hours</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Connect with nonprofits</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Build a volunteer portfolio</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/register/volunteer">Sign Up as Volunteer</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Nonprofit</CardTitle>
            <CardDescription>For organizations seeking volunteers and managing events</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Post volunteer opportunities</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Manage events and registrations</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Track volunteer hours</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Access impact analytics</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/register/nonprofit">Sign Up as Nonprofit</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Corporate</CardTitle>
            <CardDescription>For companies managing employee volunteering programs</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Create corporate volunteering programs</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Track employee engagement</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Generate CSR reports</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Measure social impact</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/register/corporate">Sign Up as Corporate</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
