import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, MapPin, Clock } from "lucide-react"

// Sample event data
const events = [
  {
    id: 1,
    title: "Campus Cleanup",
    date: "May 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Student Center",
    points: 15,
    description: "Help keep our campus beautiful by participating in our monthly cleanup event.",
    spotsAvailable: 12,
  },
  {
    id: 2,
    title: "Orientation Guide",
    date: "May 20, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Main Auditorium",
    points: 25,
    description: "Help new students navigate campus and answer questions during orientation.",
    spotsAvailable: 8,
  },
  {
    id: 3,
    title: "Charity 5K Run",
    date: "May 28, 2024",
    time: "7:00 AM - 11:00 AM",
    location: "Track Field",
    points: 20,
    description: "Volunteer to help organize and run our annual charity 5K event.",
    spotsAvailable: 15,
  },
  {
    id: 4,
    title: "Food Drive",
    date: "June 5, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Community Center",
    points: 18,
    description: "Collect and organize food donations for the local food bank.",
    spotsAvailable: 10,
  },
  {
    id: 5,
    title: "Tech Support Workshop",
    date: "June 12, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Computer Lab",
    points: 15,
    description: "Help seniors learn basic computer skills and troubleshoot tech issues.",
    spotsAvailable: 6,
  },
  {
    id: 6,
    title: "Library Book Organization",
    date: "June 18, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "University Library",
    points: 12,
    description: "Help organize and shelve books in the university library.",
    spotsAvailable: 4,
  },
]

export default function EventsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upcoming Events</h1>
          <p className="text-muted-foreground">Browse and register for volunteer opportunities</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search events..." className="w-full md:w-[300px] pl-8" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                  {event.points} points
                </Badge>
              </div>
              <CardDescription className="flex items-center mt-2">
                <Calendar className="h-4 w-4 mr-1" />
                {event.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
                <div className="text-sm font-medium">{event.spotsAvailable} volunteer spots available</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/events/${event.id}`}>Register to Volunteer</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
