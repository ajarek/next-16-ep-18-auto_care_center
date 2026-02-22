import type { Metadata } from "next"
import Header from "@/components/Header"
import InfoAbout1 from "@/components/InfoAbout1"
import Stats from "@/components/Stats"
import TeamExperts from "@/components/TeamExperts"
import { valuesData } from "@/data/valuesData"

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Poznaj historię AutoCare Center – Twojego zaufanego partnera motoryzacyjnego od 2004 roku. Certyfikowani technicy, ponad 5000 zadowolonych klientów w Kołobrzegu.",
  openGraph: {
    title: "O nas | AutoCare Center",
    description:
      "Poznaj historię AutoCare Center – Twojego zaufanego partnera motoryzacyjnego od 2004 roku.",
  },
}

const About = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start'>
      <div className="w-full flex flex-col items-center justify-center bg-[url('/about-header.jpg')] bg-cover bg-center bg-no-repeat">
        <Header
          video='/about-header.jpg'
          title1='AUTOCARE TWOIM'
          title2='ZAUFANYM PARTNEREM'
          description='Od ponad dwóch dekad zapewniamy wyjątkową obsługę motoryzacyjną, kładąc nacisk na jakość, uczciwość i zadowolenie klienta.'
        />
      </div>
      <InfoAbout1 />
      <TeamExperts />
      <Stats Data={valuesData} />
    </div>
  )
}

export default About
