import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { carCareData } from "@/data/carCareData"
import { BadgeCheck } from "lucide-react"

const CarCare = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center   md:p-16 p-4 gap-4'>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h1 className='text-4xl text-center font-bold'>
          KOMPLETNA OPIEKA{" "}
          <span className='text-primary'>NAD TWOIM SAMOCHODEM</span>
        </h1>
        <p className='max-w-xl text-center text-xl'>
          Od rutynowej konserwacji po skomplikowane naprawy – zapewniamy kompleksowe rozwiązania dla wszystkich potrzeb Twojego pojazdu
        </p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        {carCareData.map((care) => (
          <Card key={care.id} className='w-full bg-secondary-foreground'>
            <CardHeader className="relative p-0 overflow-hidden">
              <Image
                src={care.image}
                alt='process-1'
                width={768}
                height={512}
                className='object-cover object-center rounded-xl hover:scale-110 transition-all duration-700 ease-in-out'
              />
              
                <span className="absolute top-4 left-4 bg-primary p-2 rounded-full text-primary-foreground text-2xl font-bold">{care.icon}</span>
             
            </CardHeader>
            <CardContent>
              <CardTitle>{care.title}</CardTitle>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <CardDescription>{care.description}</CardDescription>
              {care.list.map((item, index) => (
                <p key={index} className="w-full flex items-center gap-2 text-left">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  {item}
                </p>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
export default CarCare
