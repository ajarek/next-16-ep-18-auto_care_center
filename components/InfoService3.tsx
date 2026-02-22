import { Button } from "@/components/ui/button"
import Link from "next/link"

const InfoService3 = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center bg-secondary-foreground   md:p-16 p-4 gap-4'>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h2 className='text-4xl text-center font-bold'>
          GOTOWY UMÓWIĆ <span className='text-primary'>SIĘ NA SERWIS ?</span>
        </h2>
        <p className='max-w-xl text-center text-xl'>
          Odkryj różnicę, jaką oferuje AutoCare. Umów się na wizytę już dziś i
          pozwól naszym certyfikowanym mechanikom zająć się Twoim pojazdem z
          profesjonalizmem, na jaki zasługuje.
        </p>
        <Button
          asChild
          className='text-lg md:text-xl lg:text-2xl px-4 py-2 md:py-6 md:px-8 lg:px-12 rounded-none font-bold uppercase tracking-wider cursor-pointer'
        >
          <Link href='/reservation'>Umów się na wizytę</Link>
        </Button>
      </div>
    </section>
  )
}

export default InfoService3
