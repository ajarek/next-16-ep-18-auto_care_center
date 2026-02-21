import Image from "next/image"
import { Wrench, ShieldCheck, Clock, Star, ChevronRight } from "lucide-react"

const features = [
  {
    icon: <Wrench className='w-5 h-5 text-primary' />,
    title: "Kompleksowa diagnostyka",
    desc: "Zaawansowane narzędzia diagnostyczne dla wszystkich marek i modeli.",
  },
  {
    icon: <ShieldCheck className='w-5 h-5 text-primary' />,
    title: "Gwarancja jakości",
    desc: "Każda naprawa objęta jest 12-miesięczną gwarancją na części i robociznę.",
  },
  {
    icon: <Clock className='w-5 h-5 text-primary' />,
    title: "Szybka realizacja",
    desc: "Większość napraw wykonujemy w ciągu jednego dnia roboczego.",
  },
  {
    icon: <Star className='w-5 h-5 text-primary' />,
    title: "Certyfikowani technicy",
    desc: "Nasz zespół posiada certyfikaty ASE i jest stale szkolony z nowych technologii.",
  },
]

const InfoService1 = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center bg-secondary-foreground/50 md:p-16 p-4 gap-8'>
      {/* Image column */}
      <div className='relative w-full md:w-[520px] aspect-square order-2 md:order-1'>
        <div className='absolute inset-0 rounded-2xl overflow-hidden'>
          <Image
            src='/services-2.jpg'
            alt='Profesjonalny serwis samochodowy'
            fill
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, 520px'
          />
          {/* Subtle overlay gradient */}
          <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent rounded-2xl' />
        </div>
        {/* Badge */}
        <div className='absolute bottom-6 left-6 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-xl text-sm shadow-lg'>
          Ponad 20 lat doświadczenia
        </div>
        {/* Decorative border accent */}
        <div className='absolute -top-3 -right-3 w-20 h-20 border-4 border-primary rounded-2xl opacity-40 pointer-events-none' />
      </div>

      {/* Content column */}
      <div className='flex flex-col gap-6 px-4 md:px-8 order-1 md:order-2 w-full'>
        <div className='flex flex-col gap-2'>
          <span className='text-primary font-semibold uppercase tracking-widest text-sm'>
            Profesjonalne usługi
          </span>
          <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
            Pełna obsługa Twojego <span className='text-primary'>pojazdu</span>{" "}
            w jednym miejscu
          </h2>
        </div>

        <p className='text-muted-foreground text-base max-w-lg leading-relaxed'>
          Oferujemy kompleksową gamę usług serwisowych, aby Twój samochód zawsze
          był w doskonałej kondycji technicznej. Zaufaj naszemu doświadczonemu
          zespołowi.
        </p>

        {/* Features list */}
        <ul className='flex flex-col gap-4'>
          {features.map((feature, idx) => (
            <li key={idx} className='flex items-start gap-4 group'>
              <div className='shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200'>
                {feature.icon}
              </div>
              <div className='flex flex-col gap-0.5'>
                <span className='font-semibold text-base'>{feature.title}</span>
                <span className='text-muted-foreground text-sm leading-snug'>
                  {feature.desc}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href='#'
          className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl w-fit transition-all duration-200 hover:gap-3 mt-2 text-sm shadow-md'
        >
          Umów wizytę serwisową
          <ChevronRight className='w-4 h-4' />
        </a>
      </div>
    </section>
  )
}

export default InfoService1
