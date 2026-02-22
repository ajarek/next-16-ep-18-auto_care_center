import type { Metadata } from "next"
import Header from "@/components/Header"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { expertData } from "@/data/expertData"
import { contactsData } from "@/data/contactsData"
import Location from "@/components/Location"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z AutoCare Center w Kołobrzegu. Zadzwoń, napisz lub odwiedź nas osobiście – nasz zespół ekspertów jest do Twojej dyspozycji w sprawach serwisu samochodowego.",
  openGraph: {
    title: "Kontakt | AutoCare Center",
    description:
      "Skontaktuj się z naszym zespołem ekspertów motoryzacyjnych w Kołobrzegu. Umów serwis lub zadaj pytanie.",
  },
}

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start gap-6'>
      <div className="relative w-full flex flex-col items-center justify-center bg-[url('/contact-header.jpg')] bg-cover bg-center bg-no-repeat">
        <Header
          video='/contact-header.jpg'
          title1='SKONTAKTUJ SIĘ Z'
          title2='NASZYM ZESPOŁEM'
          description='Chcesz umówić się na serwis lub masz pytania dotyczące swojego pojazdu? Nasz zespół ekspertów jest do Twojej dyspozycji i pomoże Ci w każdej sprawie związanej z motoryzacją.'
        />
      </div>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h2 className='text-4xl text-center font-bold'>
          INFORMACJE <span className='text-primary'>KONTAKTOWE</span>
        </h2>
        <p className='max-w-xl text-center text-xl'>
          Wiele sposobów, aby do nas dotrzeć w sprawie wszystkich potrzeb
          związanych z serwisem samochodowym
        </p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
        {contactsData.map((contact) => (
          <Card key={contact.id} className='w-full bg-secondary-foreground p-4'>
            <CardHeader className='w-full flex items-center justify-center text-primary'>
              {contact.icon}
            </CardHeader>
            <CardContent className='flex flex-col items-center justify-center gap-4'>
              <CardTitle className='text-xl font-bold text-primary'>
                {contact.name}
              </CardTitle>
              <CardDescription className='text-xl'>
                {contact.address}
              </CardDescription>
            </CardContent>
            <CardFooter className='flex flex-col items-center justify-center'>
              <CardDescription className='text-xl text-center'>
                {contact.description}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Location />
    </div>
  )
}

export default Contact
