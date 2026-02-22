import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { serviceProcess } from "@/data/serviceProcess"

const ServiceProcess = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center md:p-16 p-4 gap-4'>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h2 className='text-4xl text-center font-bold'>
          Najbardziej zaawansowany{" "}
          <span className='text-primary'>proces serwisu samochodowego</span>
        </h2>
        <p className='max-w-xl text-center text-xl'>
          Nasz usprawniony proces obsługi gwarantuje wydajność i jakość na
          każdym etapie
        </p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        {serviceProcess.map((process) => (
          <Card key={process.id} className='w-full bg-secondary-foreground'>
            <CardHeader>
              <Image
                src={process.image}
                alt={`Etap procesu serwisowego: ${process.title}`}
                width={768}
                height={512}
                className='object-cover object-center rounded-xl'
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
      <div className='flex items-center justify-center gap-4 font-semibold text-lg py-12'>
        <div className='flex items-center gap-3'>
          <div className='w-4 h-4 rounded-full bg-primary' />
          <span>Start</span>
        </div>
        <div className='w-24 h-[3px] bg-primary hidden md:block' />
        <div className='flex items-center gap-3'>
          <div className='w-4 h-4 rounded-full bg-primary' />
          <span>Proces</span>
        </div>
        <div className='w-24 h-[3px] bg-primary hidden md:block' />
        <div className='flex items-center gap-3'>
          <div className='w-4 h-4 rounded-full bg-primary' />
          <span>Kompletny</span>
        </div>
      </div>
    </section>
  )
}
export default ServiceProcess
