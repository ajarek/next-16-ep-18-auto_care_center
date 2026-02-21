import {serviceStandardsData} from "@/data/serviceStandardsData"
import Stats from "./Stats"

const InfoService2 = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center   md:p-16 p-4 gap-4'>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h1 className='text-4xl text-center font-bold'>
          STANDARDY DOSKONAŁOŚCI{" "}
          <span className='text-primary'>OBSŁUGI</span>
        </h1>
        <p className='max-w-xl text-center text-xl'>
        Każda usługa spełnia nasze rygorystyczne standardy jakości i najlepsze praktyki branżowe
        </p>
      </div>
      <Stats Data={serviceStandardsData}/>
    </section>
  )
}
export default InfoService2
