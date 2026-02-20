import { Battery, Car, Droplet, LifeBuoy, Settings, Wrench } from "lucide-react";

export const carCareData = [
    {
        id: 1,
        title: "Usługa wymiany oleju",
        description: "Pełna wymiana oleju na olej syntetyczny lub konwencjonalny najwyższej jakości, wymiana filtra, sprawdzenie poziomu płynów i podstawowy przegląd pojazdu.",
        list: [
            "Opcje oleju premium",
            "Wymiana filtra",
            "Kontrola poziomu płynu",
            "12-punktowa kontrola",
        ],
        icon: <Wrench className="w-12 h-12" />,
        image: "/car-care-1.jpg",
    },
    {
        id: 2,
        title: "Serwis układu hamulcowego",
        description: "Kompleksowa kontrola hamulców, wymiana klocków i tarcz, serwis płynu hamulcowego i kompletna diagnostyka układu dla optymalnego bezpieczeństwa.",
        list: [
            "Wymiana klocków hamulcowych",
            "Renowacja wirnika",
            "Obsługa płynów",
            "Inspekcja bezpieczeństwa",
        ],
        icon: <Car className="w-12 h-12" />,
        image: "/car-care-2.jpg",
    },
    {
        id: 3,
        title: "Diagnostyka silnika",
        description: "Zaawansowana diagnostyka komputerowa z wykorzystaniem najnowocześniejszego sprzętu w celu identyfikacji i rozwiązania problemów z pracą silnika oraz kodów błędów.",
        list: [
            "Diagnostyka komputerowa",
            "Odczyt kodu błędu",
            "Testowanie wydajności",
            "Analiza systemowa",
        ],
        icon: <Settings className="w-12 h-12" />,
        image: "/car-care-3.jpg",
    },
    {
        id: 4,
        title: "Akumulatory i urządzenia elektryczne",
        description: "Testowanie i wymiana akumulatorów, diagnostyka układu ładowania, serwis alternatora i pełna konserwacja układu elektrycznego.",
        list: [
            "Testowanie baterii",
            "Usługa wymiany",
            "System ładowania",
            "Diagnostyka elektryczna",
        ],
        icon: <Battery className="w-12 h-12" />,
        image: "/car-care-4.jpg",
    },
    {
        id: 5,
        title: "Usługa transmisji",
        description: "Serwis płynu przekładniowego, wymiana filtrów, diagnostyka układów i konserwacja skrzyń biegów automatycznych i manualnych.",
        list: [
            "Wymiana płynów",
            "Usługa filtrowania",
            "Diagnostyka systemu",
            "Kontrola wydajności",
        ],
        icon: <Droplet className="w-12 h-12" />,
        image: "/car-care-5.jpg",
    },
    {
        id: 6,
        title: "Opony i geometria",
        description: "Montaż opon, wyważanie kół, regulacja zbieżności kół, rotacja opon i kompleksowa kontrola opon w celu zapewnienia optymalnej wydajności.",
        list: [
            "Montaż opon",
            "Geometria kół",
            "Usługa równoważenia",
            "Rotacja i inspekcja",
        ],
        icon: <LifeBuoy className="w-12 h-12" />,
        image: "/car-care-6.jpg",
    }
]