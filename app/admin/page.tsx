import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  FileText,
  Settings,
  Search,
  Filter,
  Download,
  UserCheck,
  Building,
  Calendar,
  Briefcase,
} from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Administration Dashboard</h1>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,548</div>
                <p className="text-xs text-muted-foreground mt-1">+2.5% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <UserCheck className="mr-1 h-4 w-4" />
                  <span>8,942 Volunteers</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Nonprofits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground mt-1">+5.1% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Building className="mr-1 h-4 w-4" />
                  <span>87% Retention Rate</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground mt-1">+12.3% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>78 This Week</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Job Postings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground mt-1">+3.2% from last month</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Briefcase className="mr-1 h-4 w-4" />
                  <span>42 New This Week</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Platform Activity</CardTitle>
              <CardDescription>User engagement over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="flex flex-col items-center text-muted-foreground">
                  <BarChart3 className="h-10 w-10 mb-2" />
                  <p>Activity Chart Visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage platform users and their permissions</CardDescription>
              <div className="flex items-center gap-4 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search users..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button>Add User</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Type</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-5 p-4 border-b last:border-0">
                    <div>User Name {i}</div>
                    <div>user{i}@example.com</div>
                    <div>{i % 3 === 0 ? "Nonprofit" : i % 2 === 0 ? "Corporate" : "Volunteer"}</div>
                    <div>{i % 4 === 0 ? "Pending" : "Active"}</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        Suspend
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Moderation</CardTitle>
              <CardDescription>Review and manage platform content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Recent Opportunities</h3>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="border rounded-md divide-y">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Community Garden Volunteer</h4>
                        <p className="text-sm text-muted-foreground">Posted by: Green Earth Nonprofit</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button variant="outline" size="sm" className="text-green-500">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500">
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <h3 className="text-lg font-medium">Recent Events</h3>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="border rounded-md divide-y">
                  {[1, 2].map((i) => (
                    <div key={i} className="p-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Beach Cleanup Day</h4>
                        <p className="text-sm text-muted-foreground">Posted by: Ocean Conservation Group</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button variant="outline" size="sm" className="text-green-500">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500">
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reporting</CardTitle>
              <CardDescription>Platform performance and impact metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Volunteer Engagement</h3>
                    <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                      <div className="flex flex-col items-center text-muted-foreground">
                        <BarChart3 className="h-8 w-8 mb-2" />
                        <p className="text-sm">Engagement Chart</p>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Nonprofit Activity</h3>
                    <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                      <div className="flex flex-col items-center text-muted-foreground">
                        <BarChart3 className="h-8 w-8 mb-2" />
                        <p className="text-sm">Activity Chart</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Generated Reports</h3>
                  <Button>Generate New Report</Button>
                </div>
                <div className="border rounded-md divide-y">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">
                            Monthly Impact Report - {i === 1 ? "June" : i === 2 ? "May" : "April"} 2023
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Generated on {i === 1 ? "July 1" : i === 2 ? "June 1" : "May 1"}, 2023
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">Download</Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>Manage and send platform notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Create Notification</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Recipient Type</label>
                      <div className="flex gap-4">
                        <div className="flex items-center">
                          <input type="radio" id="all-users" name="recipient" className="mr-2" />
                          <label htmlFor="all-users">All Users</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="volunteers" name="recipient" className="mr-2" />
                          <label htmlFor="volunteers">Volunteers</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="nonprofits" name="recipient" className="mr-2" />
                          <label htmlFor="nonprofits">Nonprofits</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="corporates" name="recipient" className="mr-2" />
                          <label htmlFor="corporates">Corporates</label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="Notification subject" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        className="w-full min-h-[100px] p-2 border rounded-md"
                        placeholder="Enter notification message"
                      ></textarea>
                    </div>
                    <Button>Send Notification</Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Recent Notifications</h3>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="border rounded-md divide-y">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">
                          {i === 1
                            ? "New Features Announcement"
                            : i === 2
                              ? "Platform Maintenance"
                              : "Holiday Schedule"}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          {i === 1 ? "2 days ago" : i === 2 ? "1 week ago" : "2 weeks ago"}
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        {i === 1
                          ? "We've added new features to enhance your volunteering experience."
                          : i === 2
                            ? "The platform will undergo maintenance on Sunday from 2-4 AM EST."
                            : "Check out the holiday volunteering opportunities available now."}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Resend
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
