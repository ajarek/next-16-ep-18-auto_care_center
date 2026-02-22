import { BadgeCheck } from "lucide-react"
import Image from "next/image"

const InfoHome2 = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center bg-secondary-foreground/50 md:p-16 p-4 gap-4'>
      <div className='flex flex-col gap-6 px-8'>
        <h2 className='text-4xl font-bold flex flex-col'>
          Jesteśmy tutaj, aby zapewnić{" "}
          <span className='text-primary'>
            bezpieczeństwo Twojemu samochodowi
          </span>
        </h2>
        <p className='max-w-xl text-base flex gap-2'>
          <BadgeCheck className='text-primary shrink-0' />
          Kompleksowa kontrola i naprawa układu hamulcowego
        </p>
        <p className='max-w-xl text-base flex gap-2'>
          <BadgeCheck className='text-primary shrink-0' />
          Wymiana i naprawa zawieszenia
        </p>
        <p className='max-w-xl text-base flex gap-2'>
          <BadgeCheck className='text-primary shrink-0' />
          Diagnostyka komputerowa i naprawa elektroniki
        </p>
        <p className='max-w-xl text-base flex gap-2'>
          <BadgeCheck className='text-primary shrink-0' />
          Serwis i naprawa klimatyzacji
        </p>
        <p className='max-w-xl text-base flex gap-2'>
          <BadgeCheck className='text-primary shrink-0' />
          Wymiana opon i usługi wulkanizacyjne
        </p>
        <p className='max-w-xl text-base flex gap-2'>
          <BadgeCheck className='text-primary shrink-0' />
          Przeglądy rejestracyjne i kontrola pojazdu
        </p>
      </div>
      <div className='relative w-full md:w-[500px] aspect-square'>
        <Image
          src='/home-2.jpg'
          alt='Serwis samochodowy – naprawa układu hamulcowego i zawieszenia'
          fill
          className='object-cover object-center rounded-xl'
        />
      </div>
    </section>
  )
}
export default InfoHome2
