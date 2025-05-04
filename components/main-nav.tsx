"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "My Volunteering" },
  { href: "/points", label: "Points" },
  { href: "/rewards", label: "Rewards" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block text-blue-600">University Volunteer Portal</span>
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-blue-600",
            pathname === item.href ? "text-blue-600" : "text-muted-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
