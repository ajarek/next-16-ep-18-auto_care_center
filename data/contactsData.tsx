import { ClockIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

export const contactsData = [
    {
        id: 1,
        icon: <MapPinIcon className="w-12 h-12" />,
        name: "Odwiedź nasz sklep",
        address: "Wielkopolska 2\n Kołobrzeg",
        description: "Odwiedź nasz nowoczesny obiekt",
    },
    {
        id: 2,
        icon: <PhoneIcon className="w-12 h-12" />,
        name: "Zadzwoń do nas teraz",
        address: "(48) 123 456 789",
        description: "Skontaktuj się bezpośrednio z naszym zespołem",
    },
    {
        id: 3,
        icon: <MailIcon className="w-12 h-12" />,
        name: "Wsparcie e-mailowe",
        address: "auto.care.center@gmail.com",
        description: "Uzyskaj szczegółowe informacje",
    },
    {
        id: 4,
        icon: <ClockIcon className="w-12 h-12" />,
        name: "Godziny pracy",
        address: "pon. - pt.: 8:00 - 16:00",
        description: "Dostępna usługa ratunkowa - poza godzinami pracy",
    },
]