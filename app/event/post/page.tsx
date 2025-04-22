import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock } from "lucide-react"

export default function EventPostingForm() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an Event</CardTitle>
          <CardDescription>Post a volunteer event for your organization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="eventName">Event Name</Label>
            <Input id="eventName" placeholder="Enter event name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Event Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the event, its purpose, and what volunteers can expect"
              className="min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Event Time</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Start time" className="pl-8" />
                </div>
                <div className="relative">
                  <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="End time" className="pl-8" />
                </div>
              </div>
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
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue Name</Label>
                <Input id="venue" placeholder="Venue name" />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Street address" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Input id="city" placeholder="City" />
              <Input id="country" placeholder="Country" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="capacity">Event Capacity</Label>
              <Input id="capacity" type="number" placeholder="Maximum number of attendees" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Event Category</Label>
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
                  <SelectItem value="fundraising">Fundraising</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Registration Options</Label>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="freeEvent" />
                <label htmlFor="freeEvent" className="text-sm">
                  This is a free event
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="paidEvent" />
                <label htmlFor="paidEvent" className="text-sm">
                  This is a paid event
                </label>
              </div>

              <div className="pl-6 space-y-2">
                <Label htmlFor="ticketPrice">Ticket Price (if paid)</Label>
                <Input id="ticketPrice" type="number" placeholder="Price per ticket" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organizer">Organizer Information</Label>
            <Input id="organizer" placeholder="Name of organizing person or team" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Information</Label>
            <Input id="contact" placeholder="Email or phone number for inquiries" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any other details attendees should know"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="featured" />
            <label htmlFor="featured" className="text-sm">
              Feature this event (additional fee may apply)
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Event</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
