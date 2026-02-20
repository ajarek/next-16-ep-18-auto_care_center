import { Button } from "./ui/button"

const Header = ({video, title1, title2, description}: {video: string, title1: string, title2: string, description: string}) => {
  return (
    <div className='relative w-full h-[280px] sm:h-[450px] md:h-[550px] lg:h-[700px]  overflow-hidden '>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover object-bottom'
      />
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-2xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 max-w-5xl tracking-tight'>
          {title1} <span className='text-primary'>{title2}</span>{" "}
          
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed'>
         {description}
        </p>
        <Button
          className='text-lg md:text-xl lg:text-2xl px-4 py-2 md:py-6 md:px-8 lg:px-12 rounded-none font-bold uppercase tracking-wider cursor-pointer'
        >
          Usługa Rezerwacji 
        </Button>
      </div>
    </div>
  )
}

export default Header
