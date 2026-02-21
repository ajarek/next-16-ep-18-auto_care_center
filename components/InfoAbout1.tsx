import Image from "next/image"

const InfoAbout1 = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center bg-secondary-foreground/50 md:p-16 p-4 gap-4'>
      <div className='flex flex-col gap-6 px-8'>
        <h1 className='text-4xl font-bold flex flex-col'>
          Nasza historia <span className='text-primary'>od 2004 roku</span>
        </h1>
        <p className='max-w-xl text-xl'>
          AutoCare zaczynało jako mały, rodzinny warsztat samochodowy z prostą
          misją: zapewnić uczciwy i niezawodny serwis samochodowy naszej
          społeczności. To, co zaczęło się od dwóch mechaników i pasji do
          samochodów, przerodziło się w kompleksowy serwis samochodowy. Dzisiaj
          jesteśmy dumni, że możemy służyć tysiącom klientów, kierując się tymi
          samymi wartościami, które stały za powstaniem naszej firmy -
          uczciwością, jakością i autentyczną troską o każdy pojazd, który
          trafia do naszego warsztatu.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold text-primary'>2004</h2>
            <p>Założenie firmy</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold text-primary'>5000+</h2>
            <p>Zadowolonych klientów</p>
          </div>
        </div>
      </div>
      <div className='relative w-full md:w-[500px] aspect-square'>
        <Image
          src='/about-1.jpg'
          alt='about-1'
          fill
          className='object-cover object-center rounded-xl'
        />
      </div>
    </section>
  )
}
export default InfoAbout1
