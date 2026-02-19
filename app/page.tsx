import Header from "@/components/Header";
import Stats from "@/components/Stats";
import InfoHome1 from "@/components/InfoHome1";
import { statsData } from "@/data/statsData";
import { serviceData } from "@/data/serviceData";
import InfoHome2 from "@/components/InfoHome2";
import InfoHome3 from "@/components/InfoHome3";
import ServiceProcess from "@/components/ServiceProcess";
import CarServiceGallery from "@/components/CarServiceGallery";

const Home=()=>{
return (
  <div className="min-h-screen flex flex-col items-center justify-start ">
  <Header />
  <Stats Data={statsData} />
  <InfoHome1 />
  <Stats Data={serviceData} />
  <InfoHome2 />
  <InfoHome3 />
  <ServiceProcess />
  <CarServiceGallery />
  </div>
);
}

export default Home;