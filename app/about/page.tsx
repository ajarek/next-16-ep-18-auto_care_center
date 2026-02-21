import Header from "@/components/Header"
import InfoAbout1 from "@/components/InfoAbout1"
import Stats from "@/components/Stats"
import TeamExperts from "@/components/TeamExperts"
import { valuesData } from "@/data/valuesData"


const About = () => {
  return (
     <div className="w-full min-h-screen flex flex-col items-center justify-start ">
    <div className="w-full flex flex-col items-center justify-center bg-[url('/about-header.jpg')] bg-cover bg-center bg-no-repeat">
        <Header video="/about-header.jpg" title1="AUTOCARE
TWOIM" title2="ZAUFANYM PARTNEREM" description="Od ponad dwóch dekad zapewniamy wyjątkową obsługę motoryzacyjną, kładąc nacisk na jakość, uczciwość i zadowolenie klienta."/>
    </div>
    <InfoAbout1/>
    <TeamExperts/>
   <Stats Data={valuesData}/>
    </div>
  )
}

export default About