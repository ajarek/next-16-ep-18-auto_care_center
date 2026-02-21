import Header from "@/components/Header"
import Stats from "@/components/Stats"
import InfoHome1 from "@/components/InfoHome1"
import { statsData } from "@/data/statsData"
import { serviceData } from "@/data/serviceData"
import InfoHome2 from "@/components/InfoHome2"
import InfoHome3 from "@/components/InfoHome3"
import ServiceProcess from "@/components/ServiceProcess"
import CarServiceGallery from "@/components/CarServiceGallery"
import InfoHome4 from "@/components/InfoHome4"


const Home = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start '>
      <Header
        video='/header-video.mp4'
        title1='WITAMY W NASZYM '
        title2='PROFESJONALNYM GARAŻU'
        description='Profesjonalne usługi konserwacji i napraw samochodowych z ponad 20-letnim doświadczeniem. Twój samochód zasługuje na najlepszą opiekę.'
      />
      <Stats Data={statsData} />
      <InfoHome1 />
      <Stats Data={serviceData} />
      <InfoHome2 />
      <InfoHome3 />
      <ServiceProcess />
      <CarServiceGallery />
     
      <InfoHome4 />
    </div>
  )
}

export default Home
