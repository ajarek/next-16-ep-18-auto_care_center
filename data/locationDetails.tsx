import { MapPin, Car, Compass } from "lucide-react"

export const locationDetails = [
  {
    icon: <MapPin className='w-5 h-5 text-primary' />,
    title: "Adres",
    desc: "ul. Wielkopolska 2, 78-100 Kołobrzeg, Polska",
  },
  {
    icon: <Car className='w-5 h-5 text-primary' />,
    title: "Parking",
    desc: "Bezpłatny parking dla klientów dostępny",
  },
  {
    icon: <Compass className='w-5 h-5 text-primary' />,
    title: "Wskazówki",
    desc: "Blisko centrum miasta, łatwy dojazd autostradą",
  },
]