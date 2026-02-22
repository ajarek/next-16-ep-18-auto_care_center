import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { carServiceGallery } from "@/data/carServiceGallery"
import Stats from "@/components/Stats"
import { statsGallery } from "@/data/statsGallery"

const CarServiceGallery = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center bg-secondary-foreground   md:p-16 p-4 gap-4'>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h2 className='text-4xl text-center font-bold'>
          Nasza profesjonalna{" "}
          <span className='text-primary'>galeria serwisu samochodowego</span>
        </h2>
        <p className='max-w-xl text-center text-xl'>
          Zapoznaj się z naszym najnowocześniejszym obiektem i profesjonalnymi
          usługami motoryzacyjnymi
        </p>
      </div>
      <div className='relative w-full md:h-[512px] h-[300px] flex flex-col items-center justify-center overflow-hidden'>
        <Image
          src='/car-service-gallery-full.jpg'
          alt='Centrum serwisowe AutoCare Center – pełny widok warsztatu'
          fill
          className='object-cover object-center rounded-xl '
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 '></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center hover:scale-110 transition-all duration-700 '>
          <h2 className='lg:text-4xl text-2xl font-bold mb-4'>
            Nasze Profesjonalne Centrum Serwisowe
          </h2>
          <p className='lg:text-xl text-lg '>
            Obiekt najnowocześniejszy, wyposażony w nowoczesny sprzęt
          </p>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        {carServiceGallery.map((process) => (
          <Card
            key={process.id}
            className='w-full bg-background overflow-hidden'
          >
            <CardHeader>
              <Image
                src={process.image}
                alt={process.title}
                width={768}
                height={512}
                className='object-cover object-center rounded-xl hover:scale-110 transition-all duration-700'
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{process.title}</CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription>{process.description}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Stats Data={statsGallery} />
    </section>
  )
}
export default CarServiceGallery
