import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/utils"

import "@/styles/globals.css";


import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/dashboardui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "jStack App",
  description: "Created using jStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <style>
            {`
              :root {
                --font-sans: ${inter.style};
                --font-heading: ${eb_garamond.style};
              }
            `}
          </style>
        </head>
        <body className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          eb_garamond.variable
        )}>
          <main className="relative flex-1 flex flex-col">
            <Providers>
              <Toaster
                richColors
                theme="dark"
                position="top-right"
                closeButton
              />
              {children}
            </Providers>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
