import type { Metadata } from "next"
import { Roboto, Pacifico } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "sonner"

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
  title: {
    default: "AutoCare Center | Profesjonalny Serwis Samochodowy w Kołobrzegu",
    template: "%s | AutoCare Center",
  },
  description:
    "AutoCare Center – profesjonalne usługi konserwacji i napraw samochodowych w Kołobrzegu. Ponad 20 lat doświadczenia, certyfikowani technicy, szybka realizacja i gwarancja jakości.",
  keywords: [
    "serwis samochodowy Kołobrzeg",
    "warsztat samochodowy",
    "naprawa samochodów",
    "wymiana oleju",
    "diagnostyka komputerowa",
    "serwis hamulców",
    "AutoCare",
    "mechanik Kołobrzeg",
  ],
  authors: [{ name: "AutoCare Center" }],
  creator: "AutoCare Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "AutoCare Center",
    title: "AutoCare Center | Profesjonalny Serwis Samochodowy w Kołobrzegu",
    description:
      "Profesjonalne usługi konserwacji i napraw samochodowych z ponad 20-letnim doświadczeniem. Certyfikowani technicy, nowoczesny sprzęt, gwarancja jakości.",
  },
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
        <Toaster />
      </body>
    </html>
  )
}
