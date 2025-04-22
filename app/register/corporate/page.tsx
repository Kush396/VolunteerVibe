import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function CorporateRegistration() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Corporate Registration</CardTitle>
          <CardDescription>
            Create a corporate account to manage employee volunteering programs and track CSR initiatives.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" placeholder="Enter your company name" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="adminFirstName">Admin First Name</Label>
              <Input id="adminFirstName" placeholder="First name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="adminLastName">Admin Last Name</Label>
              <Input id="adminLastName" placeholder="Last name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Corporate Email</Label>
            <Input id="email" type="email" placeholder="Enter your corporate email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Company Website</Label>
            <Input id="website" placeholder="https://www.yourcompany.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance & Banking</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-50">1-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501-1000">501-1000 employees</SelectItem>
                <SelectItem value="1001+">1001+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="headquarters">Headquarters Location</Label>
            <div className="grid grid-cols-2 gap-4">
              <Input id="city" placeholder="City" />
              <Input id="country" placeholder="Country" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="csrFocus">CSR Focus Areas</Label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Education",
                "Environment",
                "Health",
                "Poverty Reduction",
                "Diversity & Inclusion",
                "Community Development",
                "Disaster Relief",
                "Other",
              ].map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <Checkbox id={`area-${area}`} />
                  <label htmlFor={`area-${area}`} className="text-sm">
                    {area}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="csrGoals">CSR Goals</Label>
            <Textarea
              id="csrGoals"
              placeholder="Describe your company's CSR goals and objectives"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Corporate Account</Button>
        </CardFooter>
      </Card>

      <div className="text-center mt-4">
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
