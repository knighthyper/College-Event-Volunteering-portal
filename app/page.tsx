import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Award, Clock, ArrowRight } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
        <p className="text-muted-foreground">Track your volunteer hours, upcoming events, and rewards.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Total Points</CardTitle>
            <Award className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">125</div>
            <p className="text-xs text-muted-foreground">Points earned from 8 events</p>
          </CardContent>
          <CardFooter>
            <Link href="/points" className="text-blue-600 text-sm flex items-center">
              View history <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Upcoming Events</CardTitle>
            <CalendarDays className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">3</div>
            <p className="text-xs text-muted-foreground">Events you're registered for</p>
          </CardContent>
          <CardFooter>
            <Link href="/volunteer" className="text-blue-600 text-sm flex items-center">
              View my events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Available Rewards</CardTitle>
            <Clock className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">5</div>
            <p className="text-xs text-muted-foreground">Rewards you can redeem now</p>
          </CardContent>
          <CardFooter>
            <Link href="/rewards" className="text-blue-600 text-sm flex items-center">
              Browse rewards <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Campus Cleanup</CardTitle>
              <CardDescription>May 15, 2024 • 10:00 AM - 2:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Help keep our campus beautiful by participating in our monthly cleanup event.
              </p>
              <div className="mt-2 flex items-center text-sm">
                <span className="font-medium text-blue-600">15 points</span>
                <span className="mx-2">•</span>
                <span>Student Center</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Orientation Guide</CardTitle>
              <CardDescription>May 20, 2024 • 8:00 AM - 4:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Help new students navigate campus and answer questions during orientation.
              </p>
              <div className="mt-2 flex items-center text-sm">
                <span className="font-medium text-blue-600">25 points</span>
                <span className="mx-2">•</span>
                <span>Main Auditorium</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Charity 5K Run</CardTitle>
              <CardDescription>May 28, 2024 • 7:00 AM - 11:00 AM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Volunteer to help organize and run our annual charity 5K event.
              </p>
              <div className="mt-2 flex items-center text-sm">
                <span className="font-medium text-blue-600">20 points</span>
                <span className="mx-2">•</span>
                <span>Track Field</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
