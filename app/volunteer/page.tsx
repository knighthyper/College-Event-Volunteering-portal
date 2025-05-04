import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock } from "lucide-react"

// Sample volunteer data
const upcomingEvents = [
  {
    id: 1,
    title: "Campus Cleanup",
    date: "May 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Student Center",
    points: 15,
    role: "General Volunteer",
    status: "Approved",
  },
  {
    id: 2,
    title: "Orientation Guide",
    date: "May 20, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Main Auditorium",
    points: 25,
    role: "Team Leader",
    status: "Pending",
  },
  {
    id: 3,
    title: "Charity 5K Run",
    date: "May 28, 2024",
    time: "7:00 AM - 11:00 AM",
    location: "Track Field",
    points: 20,
    role: "Registration Assistant",
    status: "Approved",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Blood Drive",
    date: "April 10, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Health Center",
    points: 15,
    role: "Check-in Assistant",
    status: "Completed",
  },
  {
    id: 5,
    title: "Career Fair",
    date: "March 25, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Student Union",
    points: 20,
    role: "Employer Guide",
    status: "Completed",
  },
]

function EventCard({ event, isPast = false }) {
  const statusColor = {
    Approved: "bg-green-50 text-green-600 hover:bg-green-50",
    Pending: "bg-yellow-50 text-yellow-600 hover:bg-yellow-50",
    Completed: "bg-blue-50 text-blue-600 hover:bg-blue-50",
  }

  return (
    <Card key={event.id} className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <Badge variant="outline" className={statusColor[event.status]}>
            {event.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center mt-2">
          <Calendar className="h-4 w-4 mr-1" />
          {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
          <div className="mt-4">
            <p className="font-medium">Role: {event.role}</p>
            <p className="text-blue-600 font-medium">{event.points} points</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {!isPast ? (
          <Button className="w-full" variant="outline" asChild>
            <Link href={`/volunteer/${event.id}`}>View Details</Link>
          </Button>
        ) : (
          <Button className="w-full" variant="outline" asChild>
            <Link href={`/volunteer/${event.id}`}>View Certificate</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function VolunteerPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Volunteering</h1>
        <p className="text-muted-foreground">Track your volunteer registrations and history</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Events ({upcomingEvents.length})</TabsTrigger>
          <TabsTrigger value="past">Past Events ({pastEvents.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground mb-4">You haven't registered for any upcoming events yet.</p>
              <Button asChild>
                <Link href="/events">Browse Events</Link>
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="past">
          {pastEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground mb-4">You don't have any past volunteer events.</p>
              <Button asChild>
                <Link href="/events">Browse Events</Link>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
