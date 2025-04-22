import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, DollarSign, Calendar, Brain } from "lucide-react"

export default function MonetizationPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Monetization Strategies</h1>
        <p className="mt-3 text-muted-foreground">
          Multiple revenue streams to support platform growth and sustainability
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <Card className="flex flex-col">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Subscription Plans</CardTitle>
            <CardDescription>Tiered subscription models for different user types</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Freemium model with basic features</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Premium plans for nonprofits ($50-$200/month)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Enterprise solutions for corporates ($500-$5000/month)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/pricing">View Subscription Plans</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Transaction-Based</CardTitle>
            <CardDescription>Fees applied to specific platform transactions</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Event registration fees (5% of ticket sales)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Premium job listings ($20-$100 per listing)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Featured opportunity placement</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/pricing?tab=transaction">View Transaction Fees</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>AI-Powered Services</CardTitle>
            <CardDescription>Premium AI features with per-use pricing</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Resume parsing ($5 per resume)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Custom impact analytics reports (from $99)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Advanced matching algorithms</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/pricing?tab=ai">View AI Services</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Detailed Monetization Strategy</h2>

        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Subscription Plans</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Freemium Model</h4>
                    <p className="text-muted-foreground">
                      Basic features available to all users with limited AI integrations. This tier serves as an entry
                      point to attract users to the platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Premium Plans for Nonprofits ($50–$200/month)</h4>
                    <p className="text-muted-foreground">
                      Advanced analytics, enhanced content exposure, and priority listing. Pricing varies based on
                      organization size and needs.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Small nonprofits: $50/month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Medium nonprofits: $100/month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Large nonprofits: $200/month</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Enterprise Solutions for Corporates ($500–$5000/month)</h4>
                    <p className="text-muted-foreground">
                      Custom CSR dashboards, integration support, and comprehensive impact reporting. Pricing scales
                      with employee count and customization needs.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Small companies (up to 100 employees): $500/month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Medium companies (101-1000 employees): $1000-$2500/month</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Large enterprises (1000+ employees): $3000-$5000/month</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Transaction-Based Revenue</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Event Registrations (5% of ticket sales)</h4>
                    <p className="text-muted-foreground">
                      A small processing fee applied to paid event ticketing. This covers payment processing costs and
                      provides event management tools.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Secure payment processing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Attendee management</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Event promotion tools</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Job Listings ($20–$100 per listing)</h4>
                    <p className="text-muted-foreground">
                      Premium placement for nonprofit job postings with enhanced visibility. Pricing varies based on
                      listing duration and promotion level.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Standard listing: $20 (30 days)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Featured listing: $50 (30 days)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Premium listing: $100 (60 days + newsletter feature)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">AI-Powered Service Fees</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Resume Parsing ($5 per resume)</h4>
                    <p className="text-muted-foreground">
                      Automatically extract skills and experience from volunteer resumes for better matching. This
                      service uses advanced natural language processing to identify relevant skills and qualifications.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Skill extraction and categorization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Experience level assessment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Automated matching recommendations</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Impact Analytics Reports (Starting at $99)</h4>
                    <p className="text-muted-foreground">
                      Custom AI-generated reports for detailed CSR insights and social impact measurement. These reports
                      provide actionable insights to improve volunteer programs and demonstrate impact to stakeholders.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Basic impact report: $99</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Comprehensive CSR analysis: $249</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Custom enterprise reporting: Custom pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Ready to explore our monetization options?</h3>
          <Button asChild size="lg">
            <Link href="/pricing">
              View Detailed Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
