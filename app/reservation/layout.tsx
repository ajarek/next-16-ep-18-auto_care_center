import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rezerwacja online",
  description:
    "Zarezerwuj wizytę serwisową w AutoCare Center online. Wybierz usługę, termin i godzinę – szybko, wygodnie i bez czekania w kolejce.",
  openGraph: {
    title: "Rezerwacja online | AutoCare Center",
    description:
      "Umów się na wizytę serwisową online. Wybierz spośród wielu usług motoryzacyjnych i zarezerwuj dogodny termin.",
  },
}

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
