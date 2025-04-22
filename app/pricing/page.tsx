import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4">Pricing</div>
        <h1 className="text-3xl font-bold tracking-tight">Energy Well Spent</h1>
        <p className="mt-3 text-muted-foreground">Choose the right plan for your organization's needs</p>
      </div>

      <Tabs defaultValue="subscription" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="subscription">Subscription Plans</TabsTrigger>
          <TabsTrigger value="transaction">Transaction-Based</TabsTrigger>
          <TabsTrigger value="ai">AI-Powered Services</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="flex flex-col border-muted relative overflow-hidden">
              <div className="h-2 bg-secondary w-full absolute top-0"></div>
              <CardHeader>
                <CardTitle>Freemium</CardTitle>
                <CardDescription>For individuals and small nonprofits</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <span>Basic volunteer matching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <span>Up to 5 active opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <span>Standard volunteer profiles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <span>Basic reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <span>Limited AI integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <span>Community support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-black text-black hover:bg-gray-100">
                  <Link href="/register">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="flex flex-col relative border-black">
              <div className="h-2 bg-accent w-full absolute top-0"></div>
              <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>For growing nonprofits and organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$50-$200</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>AI-powered volunteer matching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>Unlimited opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>Enhanced volunteer profiles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>Priority listing in search results</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>Enhanced content exposure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/register/nonprofit">Subscribe Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col border-muted relative overflow-hidden">
              <div className="h-2 bg-community w-full absolute top-0"></div>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For corporations and large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$500-$5000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>Custom CSR dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>Employee engagement tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>Comprehensive impact reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>SSO integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>Integration support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-black text-black hover:bg-gray-100">
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Subscription Plan Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Freemium Model</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Basic features available to all users with limited AI integrations. Perfect for individuals and small
                  organizations just getting started.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Premium Plans for Nonprofits ($50–$200/month)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Advanced analytics, enhanced content exposure, and priority listing. Pricing varies based on
                  organization size and feature requirements.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Enterprise Solutions for Corporates ($500–$5000/month)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Custom CSR dashboards, integration support, and comprehensive impact reporting. Pricing scales with
                  employee count and customization needs.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transaction" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <div className="h-2 bg-secondary w-full absolute top-0"></div>
              <CardHeader>
                <CardTitle>Event Registration Fees</CardTitle>
                <CardDescription>Processing fees for paid event ticketing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-4xl font-bold">5%</div>
                  <p className="text-muted-foreground mt-2">of ticket sales</p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <div>
                      <p className="font-medium">Secure payment processing</p>
                      <p className="text-sm text-muted-foreground">Integrated payment gateway with fraud protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <div>
                      <p className="font-medium">Attendee management</p>
                      <p className="text-sm text-muted-foreground">
                        Track registrations, send reminders, and manage check-ins
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <div>
                      <p className="font-medium">Customizable registration forms</p>
                      <p className="text-sm text-muted-foreground">Collect the information you need from attendees</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/event/post">Create an Event</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="h-2 bg-accent w-full absolute top-0"></div>
              <CardHeader>
                <CardTitle>Premium Job Listings</CardTitle>
                <CardDescription>Enhanced visibility for nonprofit job postings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-4xl font-bold">$20-$100</div>
                  <p className="text-muted-foreground mt-2">per listing</p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Featured placement</p>
                      <p className="text-sm text-muted-foreground">
                        Priority positioning in search results and job board
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Extended visibility</p>
                      <p className="text-sm text-muted-foreground">Listings remain active for longer periods</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Enhanced branding</p>
                      <p className="text-sm text-muted-foreground">
                        Include your organization's logo and custom styling
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/job/post">Post a Job</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Transaction-Based Revenue Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Event Registrations (5% of ticket sales)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  A small processing fee applied to paid event ticketing. This covers payment processing costs and
                  provides event management tools.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Job Listings ($20–$100 per listing)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Premium placement for nonprofit job postings with enhanced visibility. Pricing varies based on listing
                  duration and promotion level.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <div className="h-2 bg-community w-full absolute top-0"></div>
              <CardHeader>
                <CardTitle>AI-Powered Resume Parsing</CardTitle>
                <CardDescription>Automated skill extraction and matching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-4xl font-bold">$5</div>
                  <p className="text-muted-foreground mt-2">per resume</p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <div>
                      <p className="font-medium">Automated skill extraction</p>
                      <p className="text-sm text-muted-foreground">
                        Identify key skills and experience from volunteer resumes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <div>
                      <p className="font-medium">Intelligent matching</p>
                      <p className="text-sm text-muted-foreground">
                        Match volunteers to opportunities based on extracted skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-community" />
                    <div>
                      <p className="font-medium">Skill gap analysis</p>
                      <p className="text-sm text-muted-foreground">
                        Identify missing skills and suggest training opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/ai-services">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="h-2 bg-secondary w-full absolute top-0"></div>
              <CardHeader>
                <CardTitle>Custom Impact Analytics Reports</CardTitle>
                <CardDescription>AI-generated insights for CSR initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">Custom Pricing</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-sm">Pricing varies based on report complexity and data volume</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="text-muted-foreground mt-2">Starting at $99 per report</p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <div>
                      <p className="font-medium">Detailed CSR insights</p>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive analysis of corporate social responsibility initiatives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <div>
                      <p className="font-medium">Social impact measurement</p>
                      <p className="text-sm text-muted-foreground">
                        Quantify the impact of volunteer activities on communities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-secondary" />
                    <div>
                      <p className="font-medium">Customizable reporting</p>
                      <p className="text-sm text-muted-foreground">
                        Tailor reports to your organization's specific needs and goals
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/ai-services">Request a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">AI-Powered Service Fee Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Resume Parsing ($5 per resume)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Automatically extract skills and experience from volunteer resumes for better matching. This service
                  uses advanced natural language processing to identify relevant skills and qualifications.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Impact Analytics Reports (Starting at $99)</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Custom AI-generated reports for detailed CSR insights and social impact measurement. These reports
                  provide actionable insights to improve volunteer programs and demonstrate impact to stakeholders.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">FEEL THE VIBE, MAKE A DIFFERENCE!</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of organizations and volunteers making a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/register">Sign Up Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-gray-100">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
