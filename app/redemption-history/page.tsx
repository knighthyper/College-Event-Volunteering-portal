import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Award, Download } from "lucide-react"

// Sample redemption history data
const redemptionHistory = [
  {
    id: 1,
    reward: "Campus Cafe $5 Voucher",
    points: 25,
    redeemedDate: "April 15, 2024",
    expiryDate: "July 15, 2024",
    status: "Active",
    voucherCode: "CAFE-1234-5678",
  },
  {
    id: 2,
    reward: "University Branded Water Bottle",
    points: 60,
    redeemedDate: "March 10, 2024",
    expiryDate: "N/A",
    status: "Claimed",
    voucherCode: "MERCH-8765-4321",
  },
  {
    id: 3,
    reward: "Campus Bookstore $10 Gift Card",
    points: 50,
    redeemedDate: "February 20, 2024",
    expiryDate: "May 20, 2024",
    status: "Expired",
    voucherCode: "BOOK-9876-5432",
  },
  {
    id: 4,
    reward: "Campus Cafe $5 Voucher",
    points: 25,
    redeemedDate: "January 5, 2024",
    expiryDate: "April 5, 2024",
    status: "Used",
    voucherCode: "CAFE-5432-1098",
  },
]

export default function RedemptionHistoryPage() {
  // Calculate total points redeemed
  const totalPointsRedeemed = redemptionHistory.reduce((sum, item) => sum + item.points, 0)

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Redemption History</h1>
        <p className="text-muted-foreground">Track your reward redemptions and their status</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Total Redeemed</CardTitle>
            <Award className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">{totalPointsRedeemed}</div>
            <p className="text-xs text-muted-foreground">Points used for rewards</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Active Rewards</CardTitle>
            <Award className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-blue-600">
              {redemptionHistory.filter((item) => item.status === "Active").length}
            </div>
            <p className="text-xs text-muted-foreground">Rewards available to use</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Redemption History</CardTitle>
          <CardDescription>A record of all your redeemed rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reward</TableHead>
                <TableHead>Redeemed On</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {redemptionHistory.map((item) => {
                const statusColor = {
                  Active: "bg-green-50 text-green-600 hover:bg-green-50",
                  Claimed: "bg-blue-50 text-blue-600 hover:bg-blue-50",
                  Expired: "bg-red-50 text-red-600 hover:bg-red-50",
                  Used: "bg-gray-50 text-gray-600 hover:bg-gray-50",
                }

                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.reward}</TableCell>
                    <TableCell>{item.redeemedDate}</TableCell>
                    <TableCell>{item.points}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusColor[item.status]}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {item.status === "Active" && (
                        <Button size="sm" variant="outline" className="h-8 gap-1">
                          <Download className="h-3.5 w-3.5" />
                          <span>Voucher</span>
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
