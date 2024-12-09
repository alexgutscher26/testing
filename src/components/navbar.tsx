import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { cn } from "@/utils"

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <div className="relative w-full h-full">
      <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px] bg-[rgba(10,10,10,0.8)] backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>

      <header
        className="fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th"
      >
        <MaxWidthWrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] px- md:px-2 flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-foreground">MonitorFlow</span>
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-foreground">{user.fullName}</span>
                <Button
                  asChild
                  variant="outline"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <SignOutButton />
              </div>
            ) : (
              <Button
                asChild
                variant="outline"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <Link href="/sign-in">Sign in</Link>
              </Button>
            )}
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}
