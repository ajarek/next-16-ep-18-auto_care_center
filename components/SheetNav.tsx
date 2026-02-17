'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function SheetNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild className='lg:hidden'>
        <Button
          variant='outline'
          className='text-xl cursor-pointer bg-transparent border-none'
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=' lg:hidden opacity-75'>
        <SheetHeader>
          <SheetTitle>Menu Nawigacyjne</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-start gap-4 text-xl italic font-semibold p-4'>
           <Link href="/" className={`text-lg ${pathname === "/" ? "text-primary" : ""} transition-colors hover:text-primary`}>Strona główna</Link>
            <Link href="/services" className={`text-lg ${pathname === "/services" ? "text-primary" : ""} transition-colors hover:text-primary`}>Usługi</Link>
            <Link href="/about" className={`text-lg ${pathname === "/about" ? "text-primary" : ""} transition-colors hover:text-primary`}>O nas</Link>
            <Link href="/contact" className={`text-lg ${pathname === "/contact" ? "text-primary" : ""} transition-colors hover:text-primary`}>Kontakt</Link>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant='outline' className='text-xl cursor-pointer'>
              Zamknij
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
