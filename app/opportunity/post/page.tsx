import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

export default function OpportunityPostingForm() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Post a Volunteer Opportunity</CardTitle>
          <CardDescription>Create a new volunteer opportunity for your organization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Opportunity Title</Label>
            <Input id="title" placeholder="Enter a clear, descriptive title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the opportunity, responsibilities, and impact"
              className="min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
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
                  <SelectItem value="crisis">Crisis Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Opportunity Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onetime">One-time</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="group">Group</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Required Skills</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Communication",
                "Leadership",
                "Teaching",
                "Technical",
                "Writing",
                "Design",
                "Marketing",
                "Event Planning",
                "Research",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox id={`skill-${skill}`} />
                  <label htmlFor={`skill-${skill}`} className="text-sm">
                    {skill}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hours">Estimated Hours</Label>
              <Input id="hours" type="number" placeholder="Total hours required" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="volunteers">Number of Volunteers Needed</Label>
              <Input id="volunteers" type="number" placeholder="How many volunteers?" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="locationType">Location Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inperson">In-person</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address (if applicable)</Label>
                <Input id="address" placeholder="Street address" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Input id="city" placeholder="City" />
              <Input id="country" placeholder="Country" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Information</Label>
            <Input id="contact" placeholder="Email or phone number for inquiries" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any other details volunteers should know"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="featured" />
            <label htmlFor="featured" className="text-sm">
              Feature this opportunity (additional fee may apply)
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Save as Draft</Button>
          <Button>Post Opportunity</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
