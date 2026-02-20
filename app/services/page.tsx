import CarCare from '@/components/CarCare'
import Header from '@/components/Header'
import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start ">
        <Header video="/service-video.mp4" title1="NASZE PROFESJONALNE " title2="USŁUGI
MOTORYZACYJNE" description="Kompleksowe rozwiązania w zakresie konserwacji i napraw samochodów, dostarczane przez certyfikowanych techników, korzystających z najnowocześniejszego sprzętu" />
        <CarCare />
    </div>
  )
}

export default Services