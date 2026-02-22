"use client"
import { usePathname } from "next/navigation"
import { CarFront } from "lucide-react"
import Link from "next/link"
import { SheetNav } from "./SheetNav"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='h-16 flex justify-between items-center px-4'>
      <Link
        href='/'
        className='flex items-center gap-0'
        aria-label='AutoCare – strona główna'
      >
        <CarFront
          size={24}
          className='text-primary border border-foreground border-r-0 h-10 w-10'
        />
        <span className='text-2xl font-semibold font-[pacifico] border border-foreground border-l-0 px-2 py-1'>
          AutoCare
        </span>
      </Link>
      <div className='flex items-center gap-6 max-lg:hidden'>
        <Link
          href='/'
          className={`text-lg ${pathname === "/" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          Strona główna
        </Link>
        <Link
          href='/services'
          className={`text-lg ${pathname === "/services" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          Usługi
        </Link>
        <Link
          href='/about'
          className={`text-lg ${pathname === "/about" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          O nas
        </Link>
        <Link
          href='/contact'
          className={`text-lg ${pathname === "/contact" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          Kontakt
        </Link>
      </div>
      <SheetNav />
    </nav>
  )
}

export default Navbar
