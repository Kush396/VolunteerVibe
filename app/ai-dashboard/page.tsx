import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Brain,
  MessageSquare,
  FileText,
  Zap,
  Sparkles,
  BarChart,
  PieChart,
  LineChart,
  UserCheck,
} from "lucide-react"

export default function AIDashboard() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">AI Insights Dashboard</h1>
          <p className="text-muted-foreground">Powered by advanced analytics and machine learning</p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="matching">Volunteer Matching</TabsTrigger>
          <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Match Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground mt-1">+5.2% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Zap className="mr-1 h-4 w-4" />
                  <span>AI-powered matching</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Chatbot Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,842</div>
                <p className="text-xs text-muted-foreground mt-1">+12.3% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>92% resolution rate</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Resumes Parsed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,256</div>
                <p className="text-xs text-muted-foreground mt-1">+8.7% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <FileText className="mr-1 h-4 w-4" />
                  <span>98% accuracy rate</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Sentiment Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7/5</div>
                <p className="text-xs text-muted-foreground mt-1">+0.3 from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Sparkles className="mr-1 h-4 w-4" />
                  <span>Based on 2,345 reviews</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Feature Usage</CardTitle>
              <CardDescription>Utilization of AI-powered features across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="flex flex-col items-center text-muted-foreground">
                  <BarChart3 className="h-10 w-10 mb-2" />
                  <p>AI Feature Usage Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matching" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Matching Accuracy</CardTitle>
                <CardDescription>AI-powered volunteer-opportunity matching performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <PieChart className="h-8 w-8 mb-2" />
                    <p>Matching Accuracy Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
                <CardDescription>Most requested vs. available volunteer skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <BarChart className="h-8 w-8 mb-2" />
                    <p>Skills Distribution Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Matching Insights</CardTitle>
              <CardDescription>AI-generated insights to improve volunteer matching</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Brain className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Skill Gap Analysis</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    There is a 27% gap between technical skills requested by nonprofits and those offered by volunteers.
                    Consider organizing technical training workshops to bridge this gap.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Brain className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Location-Based Recommendation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Remote opportunities are 3.2x more likely to be filled than in-person ones. Consider offering more
                    hybrid options to increase match rates.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Brain className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Timing Optimization</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Weekend opportunities fill 42% faster than weekday ones. Nonprofits should consider scheduling more
                    events on weekends to maximize volunteer participation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Impact Metrics</CardTitle>
              <CardDescription>AI-calculated impact of volunteer activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="flex flex-col items-center text-muted-foreground">
                  <LineChart className="h-10 w-10 mb-2" />
                  <p>Impact Metrics Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Volunteer Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28,456</div>
                <p className="text-xs text-muted-foreground mt-1">Equivalent to 14.3 full-time employees</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Economic Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$742,856</div>
                <p className="text-xs text-muted-foreground mt-1">Based on standard volunteer hour valuation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">People Impacted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-muted-foreground mt-1">Direct beneficiaries of volunteer work</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Impact Recommendations</CardTitle>
              <CardDescription>AI-generated suggestions to increase social impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Focus Area Optimization</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Environmental initiatives show 32% higher volunteer retention. Consider expanding opportunities in
                    this area.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Skill Utilization</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional skills-based volunteering generates 3.5x more economic value than general volunteering.
                    Encourage more skills-based opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
              <CardDescription>AI-powered analysis of volunteer and nonprofit feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="flex flex-col items-center text-muted-foreground">
                  <LineChart className="h-10 w-10 mb-2" />
                  <p>Sentiment Trend Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Satisfaction</CardTitle>
                <CardDescription>Key themes from volunteer feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Communication</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-sm">4.2/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Organization</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="text-sm">4.5/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Impact</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "95%" }}></div>
                    </div>
                    <span className="text-sm">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Recognition</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full" style={{ width: "70%" }}></div>
                    </div>
                    <span className="text-sm">3.5/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nonprofit Satisfaction</CardTitle>
                <CardDescription>Key themes from nonprofit feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Volunteer Quality</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "88%" }}></div>
                    </div>
                    <span className="text-sm">4.4/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Platform Usability</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "92%" }}></div>
                    </div>
                    <span className="text-sm">4.6/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matching Accuracy</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "86%" }}></div>
                    </div>
                    <span className="text-sm">4.3/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Support Quality</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: "84%" }}></div>
                    </div>
                    <span className="text-sm">4.2/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback Analysis</CardTitle>
              <CardDescription>AI-processed sentiment from recent reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <UserCheck className="h-5 w-5 mr-2 text-green-500" />
                      <h3 className="font-medium">Volunteer Feedback</h3>
                    </div>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Positive</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The matching system found me the perfect opportunity that aligned with my skills in web
                    development. I was able to make a real impact for a nonprofit that needed technical help."
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Key themes: Skill matching, Impact, Satisfaction
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <UserCheck className="h-5 w-5 mr-2 text-yellow-500" />
                      <h3 className="font-medium">Nonprofit Feedback</h3>
                    </div>
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Mixed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "We found great volunteers through the platform, but the event management tools could use some
                    improvement. It was difficult to track attendance for our larger events."
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Key themes: Volunteer quality, Platform limitations, Feature request
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
