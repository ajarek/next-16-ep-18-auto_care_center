import { BadgeCheck, Clock, ClockCheck, ShieldCheck } from "lucide-react"
import Image from "next/image"

const InfoHome3 = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center bg-secondary-foreground/50 md:p-16 p-4 gap-4'>
        <div className='relative w-full md:w-[500px] aspect-square'>
        <Image
          src='/home-3.jpg'
          alt='home-3'
          fill
          className='object-cover object-center rounded-xl'
        />
      </div>
      <div className="flex flex-col gap-6 px-8">
        <h1 className='text-4xl font-bold flex flex-col'>
          Zbudowany z precyzją <span className="text-primary">działa z doskonałością</span>
        </h1>
        <p className='max-w-xl text-xl'>
         Każda nasza usługa spełnia najwyższe standardy branżowe. Używamy wyłącznie oryginalnych części i przestrzegamy specyfikacji producenta, aby zapewnić Twojemu pojazdowi najwyższą wydajność.
        </p>
       <p className='max-w-xl text-base flex gap-2'><ShieldCheck className="text-primary" />
          Certyfikowani technicy ASE
        </p>
       <p className='max-w-xl text-base flex gap-2'><ClockCheck className="text-primary" />
          Gwarancja na wszystkie usługi
        </p>
       <p className='max-w-xl text-base flex gap-2'><Clock className="text-primary" />
          Krótki czas realizacji
        </p>
      </div>
      
    </section>
  )
}
export default InfoHome3
