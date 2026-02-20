"use client"
import Link from "next/link"
import {
  CarFront,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { motion } from "motion/react"
import { Input } from "./ui/input"

const Footer = () => {
  return (
    <footer className='relative bg-background border-t border-border pt-20 pb-10 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10'>
          {/* Branding Section */}
          <div className='space-y-8'>
            <Link
              href='/'
              className='flex items-center gap-0 group'
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CarFront
                  size={24}
                  className='text-primary border border-foreground border-r-0 h-10 w-10 p-2'
                />
              </motion.div>
              <h2 className='text-2xl font-semibold font-[pacifico] border border-foreground border-l-0 px-3 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
                AutoCare
              </h2>
            </Link>
            <p className='text-muted-foreground leading-relaxed max-w-sm'>
              Twój zaufany lokalny serwis samochodowy z ponad 20-letnim
              doświadczeniem. Wykorzystujemy najnowszą technologię, aby zapewnić
              bezpieczeństwo Twojej rodzinie na drodze.
            </p>
            <div className='flex gap-4'>
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className='h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300'
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='space-y-8'>
            <h3 className='text-xl font-bold flex items-center gap-2'>
              Usługi
              <span className='h-1 w-8 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]' />
            </h3>
            <ul className='grid grid-cols-1 gap-4'>
              {[
                { name: "Wymiana Oleju", path: "#" },
                { name: "Serwis Hamulców", path: "#" },
                { name: "Diagnostyka Komp.", path: "#" },
                { name: "Serwis Klimatyzacji", path: "#" },
                { name: "Geometria Kół", path: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className='text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group'
                  >
                    <div className='h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='space-y-8'>
            <h3 className='text-xl font-bold flex items-center gap-2'>
              Kontakt
              <span className='h-1 w-8 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]' />
            </h3>
            <div className='space-y-6'>
              <div className='flex items-start gap-4 text-muted-foreground group'>
                <div className='h-10 w-10 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all duration-300'>
                  <MapPin size={20} className='text-primary' />
                </div>
                <div>
                  <p className='font-semibold text-foreground'>Lokalizacja</p>
                  <p className='text-sm'>ul. Serwisowa 12, 00-001 Warszawa</p>
                </div>
              </div>
              <div className='flex items-start gap-4 text-muted-foreground group'>
                <div className='h-10 w-10 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all duration-300'>
                  <Phone size={20} className='text-primary' />
                </div>
                <div>
                  <p className='font-semibold text-foreground'>Infolinia</p>
                  <p className='text-sm'>+48 123 456 789</p>
                </div>
              </div>
              <div className='flex items-start gap-4 text-muted-foreground group'>
                <div className='h-10 w-10 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all duration-300'>
                  <Mail size={20} className='text-primary' />
                </div>
                <div>
                  <p className='font-semibold text-foreground'>Napisz do nas</p>
                  <p className='text-sm'>serwis@autocare.com.pl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className='space-y-8'>
            <h3 className='text-xl font-bold flex items-center gap-2'>
              Newsletter
              <span className='h-1 w-8 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]' />
            </h3>
            <p className='text-muted-foreground text-sm'>
              Bądź na bieżąco z okazjami i poradami eksperckimi dotyczącymi
              Twojego samochodu.
            </p>
            <div className='relative group'>
              <Input
                type='email'
                placeholder='Twój e-mail'
                className='w-full bg-background border border-border rounded-xl px-5 h-12 pr-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300'
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='absolute right-2 top-2 bottom-2 aspect-square bg-primary text-primary-foreground rounded-lg flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-shadow'
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
            <p className='text-[10px] text-muted-foreground italic'>
              *Zapisując się akceptujesz naszą politykę prywatności.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 relative z-10'>
          <div className='flex items-center gap-2'>
            <p className='text-muted-foreground text-sm'>
              © {new Date().getFullYear()}{" "}
              <span className='text-foreground font-bold tracking-tight'>
                AutoCare Center
              </span>
              .
            </p>
            <span className='h-4 w-px bg-border hidden md:block' />
            <p className='text-muted-foreground text-sm'>
              Wszystkie prawa zastrzeżone.
            </p>
          </div>

          <div className='flex gap-10 text-sm text-primary/80 font-medium'>
            <Link
              href='#'
              className='hover:text-primary transition-all duration-300 relative group'
            >
              Polityka Prywatności
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300' />
            </Link>
            <Link
              href='#'
              className='hover:text-primary transition-all duration-300 relative group'
            >
              Regulamin
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300' />
            </Link>
          </div>
        </div>
      </div>

      {/* Creative Background Elements */}
      <div className='absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent' />
      <div className='absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[150px] rounded-full pointer-events-none' />

      {/* Animated tire track or something subtle? Maybe just a mesh gradient */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/3 blur-[100px] rounded-full pointer-events-none' />
      <div className='absolute top-1/4 right-0 w-48 h-48 bg-primary/2 blur-[80px] rounded-full pointer-events-none' />
    </footer>
  )
}

export default Footer
