import type { Metadata } from "next"
import { Roboto, Pacifico } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
})
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Auto Care Center",
  description: "Auto Care Center",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pl' className={roboto.variable}>
      <body
        className={`${pacifico.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
