import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function NonprofitRegistration() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Nonprofit Registration</CardTitle>
          <CardDescription>
            Create an account to start posting volunteer opportunities and managing your organization's profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orgName">Organization Name</Label>
            <Input id="orgName" placeholder="Enter your organization's name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Organization Email</Label>
            <Input id="email" type="email" placeholder="Enter your organization's email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" placeholder="https://www.yourorganization.org" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your organization's phone number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Street address" />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Input id="city" placeholder="City" />
              <Input id="country" placeholder="Country" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Organization Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="environment">Environment</SelectItem>
                <SelectItem value="health">Health & Medicine</SelectItem>
                <SelectItem value="animals">Animal Welfare</SelectItem>
                <SelectItem value="arts">Arts & Culture</SelectItem>
                <SelectItem value="community">Community Development</SelectItem>
                <SelectItem value="humanitarian">Humanitarian Aid</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mission">Mission Statement</Label>
            <Textarea
              id="mission"
              placeholder="Describe your organization's mission and goals"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxId">Tax ID / Registration Number</Label>
            <Input id="taxId" placeholder="Enter your organization's tax ID or registration number" />
            <p className="text-xs text-muted-foreground mt-1">
              This information will be verified during the approval process.
            </p>
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
          <Button className="w-full">Create Organization Account</Button>
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
