import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, TrendingUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample points data
const pointsHistory = [
  {
    id: 1,
    event: "Campus Cleanup",
    date: "April 10, 2024",
    points: 15,
    status: "Approved",
  },
  {
    id: 2,
    event: "Career Fair",
    date: "March 25, 2024",
    points: 20,
    status: "Approved",
  },
  {
    id: 3,
    event: "Blood Drive",
    date: "February 15, 2024",
    points: 15,
    status: "Approved",
  },
  {
    id: 4,
    event: "Tutoring Session",
    date: "February 5, 2024",
    points: 10,
    status: "Approved",
  },
  {
    id: 5,
    event: "Library Assistant",
    date: "January 20, 2024",
    points: 12,
    status: "Approved",
  },
  {
    id: 6,
    event: "Freshman Orientation",
    date: "January 10, 2024",
    points: 25,
    status: "Approved",
  },
  {
    id: 7,
    event: "Winter Food Drive",
    date: "December 15, 2023",
    points: 18,
    status: "Approved",
  },
  {
    id: 8,
    event: "Campus Tour Guide",
    date: "November 28, 2023",
    points: 10,
    status: "Approved",
  },
]

export default function PointsPage() {
  // Calculate total points
  const totalPoints = pointsHistory.reduce((sum, item) => sum + item.points, 0)

  // Calculate points this semester (assuming current semester is 2024)
  const currentYearPoints = pointsHistory
    .filter((item) => item.date.includes("2024"))
    .reduce((sum, item) => sum + item.points, 0)

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Points</h1>
        <p className="text-muted-foreground">Track your volunteer points and history</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Total Points</CardTitle>
            <Award className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">{totalPoints}</div>
            <p className="text-xs text-muted-foreground">Lifetime points earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">This Semester</CardTitle>
            <Calendar className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">{currentYearPoints}</div>
            <p className="text-xs text-muted-foreground">Points earned in 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Ranking</CardTitle>
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">Top 10%</div>
            <p className="text-xs text-muted-foreground">Among all volunteers</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Points History</CardTitle>
          <CardDescription>A record of all your volunteer activities and points earned</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pointsHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.event}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.points}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
