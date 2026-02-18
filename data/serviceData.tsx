import { Car, Wrench, Settings, BatteryCharging } from "lucide-react";

export const serviceData = [
  {
    icon: <Wrench className='w-12 h-12' />,
    title: "Wymiana oleju",
    subtitle: "Wymiana oleju z użyciem środków smarnych premium",
  },
  {
    icon: <Car className='w-12 h-12' />,
    title: "Serwis hamulców",
    subtitle: "Kompleksowe usługi kontroli i naprawy hamulców",
  },
  {
    icon: <Settings className='w-12 h-12' />,
    title: "Diagnostyka silnika",
    subtitle: "Zaawansowana diagnostyka komputerowa  pojazdu",
  },
  {
    icon: <BatteryCharging className='w-12 h-12' />,
    title: "Serwis akumulatorów",
    subtitle: "Usługi testowania, wymiany i ładowania akumulatorów",
  },
]
