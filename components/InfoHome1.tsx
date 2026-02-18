import Image from "next/image"

const InfoHome1 = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center bg-secondary-foreground/50 md:p-16 p-4 gap-4'>
      <div className="flex flex-col gap-6 px-8">
        <h1 className='text-4xl font-bold flex flex-col'>
          AutoCare jest liderem w <span className="text-primary">branży motoryzacyjnej</span>
        </h1>
        <p className='max-w-xl text-xl'>
          Dzięki ponad dwudziestoletniemu doświadczeniu zbudowaliśmy naszą
          reputację na jakości usług, uczciwych cenach i zadowoleniu klienta.
          Nasi certyfikowani technicy korzystają z najnowocześniejszego sprzętu
          diagnostycznego, aby zapewnić Twojemu pojazdowi optymalne
          funkcjonowanie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-primary">Profesjonalny</h2>
            <p>Certyfikowani mechanicy z bogatym doświadczeniem szkoleniowym</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-primary">Niezawodny</h2>
            <p>Wysokiej jakości części i akcesorii</p>
          </div>
        </div>
      </div>
      <div className='relative w-full md:w-[500px] aspect-square'>
        <Image
          src='/home-1.jpg'
          alt='home-1'
          fill
          className='object-cover object-center rounded-xl'
        />
      </div>
    </section>
  )
}
export default InfoHome1
