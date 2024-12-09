"use client"

import { SignUp } from "@clerk/nextjs"

const Page = () => {
 return (
   <div className="w-full h-screen flex items-center justify-center">
     <SignUp fallbackRedirectUrl="/welcome" forceRedirectUrl="/welcome" />
   </div>
 )
}

export default Page