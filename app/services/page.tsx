import type { Metadata } from "next"
import CarCare from "@/components/CarCare"
import Header from "@/components/Header"
import InfoService1 from "@/components/InfoService1"
import InfoService2 from "@/components/InfoService2"
import InfoService3 from "@/components/InfoService3"

export const metadata: Metadata = {
  title: "Usługi",
  description:
    "Odkryj pełną ofertę usług serwisowych AutoCare Center w Kołobrzegu: wymiana oleju, serwis hamulców, diagnostyka komputerowa, wymiana opon, serwis klimatyzacji i wiele więcej.",
  openGraph: {
    title: "Usługi | AutoCare Center",
    description:
      "Kompleksowe rozwiązania w zakresie konserwacji i napraw samochodów, dostarczane przez certyfikowanych techników z najnowocześniejszym sprzętem.",
  },
}

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start'>
      <Header
        video='/service-video.mp4'
        title1='NASZE PROFESJONALNE'
        title2='USŁUGI MOTORYZACYJNE'
        description='Kompleksowe rozwiązania w zakresie konserwacji i napraw samochodów, dostarczane przez certyfikowanych techników, korzystających z najnowocześniejszego sprzętu'
      />
      <CarCare />
      <InfoService1 />
      <InfoService2 />
      <InfoService3 />
    </div>
  )
}

export default Services
