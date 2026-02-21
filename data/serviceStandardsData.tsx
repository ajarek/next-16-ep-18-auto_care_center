import { Clock, ShieldCheck, Star, UserCheck } from "lucide-react";

export const serviceStandardsData = [
    {   
        id: 1,
        title: "2-4 godziny\nŚredni czas obsługi",
        subtitle: "Szybka realizacja bez utraty jakości",
        icon: <Clock />
    },
    {   
        id: 2,
        title: "12 miesięcy\nGwarancja serwisowa",
        subtitle: "Kompleksowe ubezpieczenie wszystkich napraw",
        icon: <ShieldCheck/>
    },
    {   
        id: 3,
        title: "25+ techników\nCertyfikowani technicy",
        subtitle: "Doświadczeni specjaliści, którym możesz zaufać",
        icon: <UserCheck/>
    },
    {   
        id: 4,
        title: "Ocena 4.9\nSatysfakcja klienta",
        subtitle: "Niezmiennie wysokie oceny klientów",
        icon: <Star/>
    }
]