import { MapPin } from "lucide-react"
import { locationDetails } from "../data/locationDetails"

const Location = () => {
  return (
    <section className='w-full bg-[#0d1b2a] py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight'>
              Znajdź naszą <span className='text-primary'>lokalizację</span>
            </h2>
            <p className='text-gray-400 text-base leading-relaxed max-w-md'>
              Obiekt położony jest w dogodnej lokalizacji w samym sercu miasta,
              z łatwym dojazdem i dużą ilością miejsc parkingowych dla
              wszystkich typów pojazdów.
            </p>
          </div>

          <ul className='flex flex-col gap-6'>
            {locationDetails.map((item, idx) => (
              <li key={idx} className='flex items-start gap-4 group'>
                <div className='shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200'>
                  {item.icon}
                </div>
                <div className='flex flex-col gap-0.5'>
                  <span className='font-bold text-white text-sm tracking-wide uppercase'>
                    {item.title}
                  </span>
                  <span className='text-gray-400 text-sm leading-snug'>
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <a
            href='https://maps.google.com/?q=Kołobrzeg+Polska'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl w-fit transition-all duration-200 hover:gap-3 text-sm shadow-lg'
          >
            <MapPin className='w-4 h-4' />
            Otwórz w Google Maps
          </a>
        </div>

        <div className='relative w-full h-[380px] md:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
          <div className='absolute -top-3 -left-3 w-16 h-16 border-4 border-primary rounded-2xl opacity-30 pointer-events-none z-10' />
          <div className='absolute -bottom-3 -right-3 w-16 h-16 border-4 border-primary rounded-2xl opacity-30 pointer-events-none z-10' />

          <iframe
            title='Lokalizacja serwisu AutoCare Center w Kołobrzegu'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18595.703254267924!2d15.560888!3d54.17441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47003ab51a56c7c3%3A0x76d1d55f9d6f2b09!2sKo%C5%82obrzeg!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-full'
          />

          <div className='absolute bottom-0 left-0 right-0 h-16 bg-linear-gradient-to-t from-[#0d1b2a]/60 to-transparent pointer-events-none z-10' />
        </div>
      </div>
    </section>
  )
}

export default Location
