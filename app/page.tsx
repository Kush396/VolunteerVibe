import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, Calendar, Briefcase, Building2, BarChart, Heart, ArrowRight, Zap, Users, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            FEEL THE VIBE, <span className="text-secondary">MAKE A DIFFERENCE!</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            VOLUNTEERVIBES bridges the gap between those who want to help and the causes that need support, all while
            creating a vibrant community atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Brand Story</h2>
            <p className="text-lg mb-6">
              VOLUNTEERVIBES began with a simple observation: volunteering shouldn't just be about duty—it should be
              energizing, connective, and meaningful.
            </p>
            <p className="text-lg mb-6">
              Founded by a group of passionate community advocates, we bridge the gap between those who want to help and
              the causes that need support, all while creating a vibrant community atmosphere.
            </p>
            <p className="text-lg font-medium">
              When you engage with VOLUNTEERVIBES, you'll find opportunities that energize rather than drain, connect
              rather than isolate, and create meaningful impact rather than just fill time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Core Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Find Your Volunteer Rhythm</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VOLUNTEERVIBES creates "resonance opportunities"—places where your energy makes the biggest impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Matching */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-2 bg-secondary w-full"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <UserRound className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  AI-powered opportunity matching based on your skills, interests, and location.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Our "vibe matching" technology connects you with opportunities that align with your personal profile,
                  creating what we call "resonance opportunities."
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/opportunity/post" className="flex items-center text-secondary">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Event Management */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-2 bg-accent w-full"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Event Management</CardTitle>
                <CardDescription>
                  Comprehensive tools for creating, managing, and tracking volunteer events.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Create energizing volunteer events that bring people together around shared values and meaningful
                  causes.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/event/post" className="flex items-center text-accent-foreground">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Job Board */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-2 bg-community w-full"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-community/10 flex items-center justify-center mb-4 group-hover:bg-community/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-community" />
                </div>
                <CardTitle>Job Board</CardTitle>
                <CardDescription>
                  Specialized job postings for nonprofit roles with resume parsing and matching.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Find career opportunities that align with your values and allow you to make a lasting impact in the
                  nonprofit sector.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/job/post" className="flex items-center text-community">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Corporate Programs */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-2 bg-secondary w-full"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Corporate Programs</CardTitle>
                <CardDescription>
                  Tailored employee volunteering programs with CSR tracking and reporting.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Energize your workforce with meaningful volunteer opportunities that align with your company values
                  and CSR goals.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/register/corporate" className="flex items-center text-secondary">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Impact Analytics */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-2 bg-accent w-full"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <BarChart className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Impact Analytics</CardTitle>
                <CardDescription>
                  Measure and visualize your social impact with comprehensive analytics.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  See the tangible difference your contributions make with our powerful impact measurement tools.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/ai-dashboard" className="flex items-center text-accent-foreground">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Personalized Profiles */}
            <Card className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-2 bg-community w-full"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-community/10 flex items-center justify-center mb-4 group-hover:bg-community/20 transition-colors">
                  <Heart className="h-6 w-6 text-community" />
                </div>
                <CardTitle>Personalized Profiles</CardTitle>
                <CardDescription>
                  Advanced profiles with intelligent data validation for all user types.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Create a profile that showcases your unique skills, interests, and volunteer journey to find
                  opportunities that resonate with you.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/register" className="flex items-center text-community">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Your Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Energy Well Spent</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the VOLUNTEERVIBES journey from discovery to impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>

              {/* Steps */}
              <div className="space-y-12">
                {/* Step 1: Discovery */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="z-10 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-2">Discovery</h3>
                    <p className="text-muted-foreground">
                      Potential volunteers discover VOLUNTEERVIBES through peer recommendations or cause-specific
                      searches.
                    </p>
                  </div>
                </div>

                {/* Step 2: Alignment */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-2">Alignment</h3>
                    <p className="text-muted-foreground">
                      Complete a "vibe matching" assessment to identify your skills, interests, and values.
                    </p>
                  </div>
                </div>

                {/* Step 3: Engagement */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="z-10 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-2">Engagement</h3>
                    <p className="text-muted-foreground">
                      Join volunteer experiences aligned with your personal profile and interests.
                    </p>
                  </div>
                </div>

                {/* Step 4: Community */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="z-10 w-12 h-12 rounded-full bg-community text-white flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Connect with like-minded volunteers, building relationships around shared values.
                    </p>
                  </div>
                </div>

                {/* Step 5: Impact */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-2">Impact</h3>
                    <p className="text-muted-foreground">
                      See the tangible difference your contributions make through our impact analytics.
                    </p>
                  </div>
                </div>

                {/* Step 6: Advocacy */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="z-10 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      6
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-2">Advocacy</h3>
                    <p className="text-muted-foreground">
                      Become an ambassador, sharing your VOLUNTEERVIBES experiences with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Who It's For
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Community Powered Change</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VOLUNTEERVIBES serves diverse stakeholders with tailored experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <UserRound className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Volunteers</CardTitle>
                <CardDescription>
                  Socially conscious individuals aged 18-45 who value community connection
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Find opportunities that match your skills, track your impact, and build a volunteer portfolio that
                  resonates with your personal values.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link href="/register/volunteer">Sign Up as Volunteer</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Nonprofits</CardTitle>
                <CardDescription>Organizations looking to attract engaged, enthusiastic volunteers</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Post opportunities, manage events, and connect with skilled volunteers who will bring positive energy
                  to your causes.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link href="/register/nonprofit">Sign Up as Nonprofit</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-community/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-community" />
                </div>
                <CardTitle>Corporations</CardTitle>
                <CardDescription>Companies seeking to implement meaningful CSR initiatives</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Create employee volunteering programs, track CSR initiatives, and measure social impact with our
                  comprehensive tools.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link href="/register/corporate">Sign Up as Corporate</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Messages Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Volunteering That Resonates</h2>
            <p className="text-xl max-w-3xl mx-auto">
              VOLUNTEERVIBES is more than just a platform—it's a movement that transforms how people think about giving
              their time and energy to causes that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Find your volunteer rhythm</h3>
              <p className="text-center text-white/80">
                Discover opportunities that match your unique skills and interests
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Energy well spent</h3>
              <p className="text-center text-white/80">
                Make every volunteer hour count with meaningful, impactful experiences
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-community" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Community powered change</h3>
              <p className="text-center text-white/80">
                Connect with like-minded volunteers and create collective impact
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Your skills, amplified</h3>
              <p className="text-center text-white/80">
                Leverage your unique talents to make a bigger difference in the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">FEEL THE VIBE, MAKE A DIFFERENCE!</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join thousands of volunteers, nonprofits, and corporations making a difference with VOLUNTEERVIBES.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-gray-100">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
