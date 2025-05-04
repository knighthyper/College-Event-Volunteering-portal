"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Award } from "lucide-react"

// Sample rewards data
const availableRewards = [
  {
    id: 1,
    title: "Campus Bookstore $10 Gift Card",
    description: "Use at any campus bookstore location for books, supplies, or apparel.",
    points: 50,
    category: "Gift Cards",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Campus Cafe $5 Voucher",
    description: "Redeem for food or drinks at any campus dining location.",
    points: 25,
    category: "Food & Drink",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "University Branded T-Shirt",
    description: "Show your school spirit with an official university t-shirt.",
    points: 75,
    category: "Merchandise",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Priority Course Registration",
    description: "Get early access to course registration for one semester.",
    points: 150,
    category: "Academic",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    title: "Parking Pass (1 Month)",
    description: "One month of premium parking in any student lot.",
    points: 100,
    category: "Services",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    title: "University Branded Water Bottle",
    description: "Stay hydrated with this high-quality university water bottle.",
    points: 60,
    category: "Merchandise",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const redeemedRewards = [
  {
    id: 101,
    title: "Campus Cafe $5 Voucher",
    description: "Redeem for food or drinks at any campus dining location.",
    points: 25,
    redeemedDate: "April 15, 2024",
    expiryDate: "July 15, 2024",
    status: "Active",
  },
  {
    id: 102,
    title: "University Branded Water Bottle",
    description: "Stay hydrated with this high-quality university water bottle.",
    points: 60,
    redeemedDate: "March 10, 2024",
    expiryDate: "N/A",
    status: "Claimed",
  },
]

// Mock user points
const userPoints = 125

export default function RewardsPage() {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedReward, setSelectedReward] = useState(null)

  const handleRedeemClick = (reward) => {
    setSelectedReward(reward)
    setOpenDialog(true)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rewards</h1>
          <p className="text-muted-foreground">Redeem your points for exciting rewards</p>
        </div>
        <Card className="w-full md:w-auto">
          <CardContent className="p-4 flex items-center gap-3">
            <Award className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Available Points</p>
              <p className="text-2xl font-bold text-blue-600">{userPoints}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="available" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="available">Available Rewards</TabsTrigger>
          <TabsTrigger value="redeemed">My Redeemed Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value="available">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableRewards.map((reward) => {
              const canRedeem = userPoints >= reward.points

              return (
                <Card key={reward.id} className="flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{reward.title}</CardTitle>
                      <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                        {reward.points} points
                      </Badge>
                    </div>
                    <CardDescription>{reward.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-6">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src={reward.image || "/placeholder.svg"}
                        alt={reward.title}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled={!canRedeem} onClick={() => handleRedeemClick(reward)}>
                      {canRedeem ? "Redeem" : "Not Enough Points"}
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="redeemed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {redeemedRewards.map((reward) => (
              <Card key={reward.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{reward.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        reward.status === "Active"
                          ? "bg-green-50 text-green-600 hover:bg-green-50"
                          : "bg-blue-50 text-blue-600 hover:bg-blue-50"
                      }
                    >
                      {reward.status}
                    </Badge>
                  </div>
                  <CardDescription>Redeemed on {reward.redeemedDate}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Points used:</span> {reward.points}
                    </p>
                    {reward.expiryDate !== "N/A" && (
                      <p>
                        <span className="font-medium">Expires:</span> {reward.expiryDate}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedReward && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Redeem Reward</DialogTitle>
              <DialogDescription>You are about to redeem the following reward:</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center py-4">
              <img
                src={selectedReward.image || "/placeholder.svg"}
                alt={selectedReward.title}
                className="h-24 w-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{selectedReward.title}</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">{selectedReward.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-blue-600">{selectedReward.points} points</span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpenDialog(false)}>Confirm Redemption</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
