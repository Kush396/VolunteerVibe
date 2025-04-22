import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, Building2, Building, Calendar, Briefcase, FileText } from "lucide-react"
import { BrandValues } from "@/components/brand-values"

export default function FormsPage() {
  return (
    <div>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Skills, Amplified</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access all registration and submission forms in one place to start your VOLUNTEERVIBES journey
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="flex flex-col border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-2 bg-secondary w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <UserRound className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Volunteer Registration</CardTitle>
              <CardDescription>Create a volunteer profile to find opportunities</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Register as a volunteer to browse and apply for opportunities that match your skills and interests.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/register/volunteer">Register as Volunteer</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-2 bg-accent w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Building className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Nonprofit Registration</CardTitle>
              <CardDescription>Create a nonprofit organization profile</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Register your nonprofit to post volunteer opportunities, manage events, and connect with volunteers.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/register/nonprofit">Register as Nonprofit</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-2 bg-community w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-community/10 flex items-center justify-center mb-4 group-hover:bg-community/20 transition-colors">
                <Building2 className="h-6 w-6 text-community" />
              </div>
              <CardTitle>Corporate Registration</CardTitle>
              <CardDescription>Create a corporate account for CSR initiatives</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Register your company to manage employee volunteering programs and track CSR impact.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/register/corporate">Register as Corporate</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-2 bg-secondary w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Post Opportunity</CardTitle>
              <CardDescription>Create a volunteer opportunity listing</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Post a volunteer opportunity with details about skills required, location, and impact.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/opportunity/post">Post Opportunity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-2 bg-accent w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Calendar className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Create Event</CardTitle>
              <CardDescription>Organize a volunteer event</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Create and manage volunteer events with registration, attendee tracking, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/event/post">Create Event</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-2 bg-community w-full"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-community/10 flex items-center justify-center mb-4 group-hover:bg-community/20 transition-colors">
                <Briefcase className="h-6 w-6 text-community" />
              </div>
              <CardTitle>Post Job</CardTitle>
              <CardDescription>List a nonprofit job opportunity</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Post job opportunities specifically for nonprofit roles and positions.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/job/post">Post Job</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <Card>
            <CardHeader className="text-center">
              <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Form Details
              </div>
              <CardTitle>Find Your Volunteer Rhythm</CardTitle>
              <CardDescription>
                Our forms are designed with careful attention to data validation and user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Volunteer Profile Form</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Collects information about a volunteer such as their name, email, skills, interests, availability,
                    and location.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Name Field:</span>
                      <span className="text-muted-foreground">
                        Validates that the name is not too short or too long.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Email Field:</span>
                      <span className="text-muted-foreground">
                        Checks for proper email format (contains "@" and valid domain).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Skills & Interests:</span>
                      <span className="text-muted-foreground">
                        Drop-down lists with predefined options for consistent categorization.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Availability:</span>
                      <span className="text-muted-foreground">
                        Hours per week with reasonable limits to prevent impossible entries.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Opportunity Posting Form</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Enables nonprofits to post volunteer opportunities with comprehensive details.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Title & Description:</span>
                      <span className="text-muted-foreground">
                        Clear fields for opportunity details with character limits.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Skills Required:</span>
                      <span className="text-muted-foreground">
                        Multi-select dropdown matching the skills in volunteer profiles.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Duration & Location:</span>
                      <span className="text-muted-foreground">
                        Structured fields for time commitment and geographic information.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Event Posting Form</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Used to create and manage event details, including registration options.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Event Details:</span>
                      <span className="text-muted-foreground">
                        Name, date, time, and location with appropriate validation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Capacity:</span>
                      <span className="text-muted-foreground">
                        Numeric field with reasonable limits for attendee count.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Registration Options:</span>
                      <span className="text-muted-foreground">
                        Configuration for free or paid events with ticket pricing.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Job Posting Form</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Allows nonprofits to list job opportunities with comprehensive details.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Job Details:</span>
                      <span className="text-muted-foreground">
                        Title, description, and requirements with appropriate validation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Salary Range:</span>
                      <span className="text-muted-foreground">Optional numeric fields with min/max validation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Application Process:</span>
                      <span className="text-muted-foreground">
                        Options for how candidates can apply with deadline validation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                <Link href="/register">Get Started with Forms</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <BrandValues />

      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">FEEL THE VIBE, MAKE A DIFFERENCE!</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">Ready to start your volunteer journey with VOLUNTEERVIBES?</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/register">Sign Up Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
