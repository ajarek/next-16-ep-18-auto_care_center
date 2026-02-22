"use client"

import React, { useState } from "react"
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  Car,
  Wrench,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const SERVICES = [
  {
    value: "oil-change",
    label: "Wymiana oleju",
    time: "30 min",
    price: "149 zł",
    icon: "🛢️",
  },
  {
    value: "tires",
    label: "Wymiana opon",
    time: "60 min",
    price: "199 zł",
    icon: "🔄",
  },
  {
    value: "brakes",
    label: "Serwis hamulców",
    time: "90 min",
    price: "349 zł",
    icon: "🛑",
  },
  {
    value: "diagnostics",
    label: "Diagnostyka komputerowa",
    time: "45 min",
    price: "129 zł",
    icon: "💻",
  },
  {
    value: "ac",
    label: "Serwis klimatyzacji",
    time: "120 min",
    price: "299 zł",
    icon: "❄️",
  },
  {
    value: "inspection",
    label: "Przegląd techniczny",
    time: "60 min",
    price: "199 zł",
    icon: "🔍",
  },
  {
    value: "dent",
    label: "Naprawy blacharskie",
    time: "180 min",
    price: "Wycena",
    icon: "🔨",
  },
  {
    value: "full",
    label: "Kompleksowy serwis",
    time: "240 min",
    price: "699 zł",
    icon: "⭐",
  },
]

const TIME_SLOTS = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
]

const UNAVAILABLE_SLOTS = ["09:00", "11:30", "14:00", "16:00"]

const STEPS = ["Usługa", "Termin", "Dane", "Potwierdzenie"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

const MONTHS_PL = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
]

const DAYS_PL = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"]

export default function ReservationPage() {
  const today = new Date()
  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState("")
  const [calendarDate, setCalendarDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [carBrand, setCarBrand] = useState("")
  const [carModel, setCarModel] = useState("")
  const [carYear, setCarYear] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const selectedServiceData = SERVICES.find((s) => s.value === selectedService)

  const daysInMonth = getDaysInMonth(calendarDate.year, calendarDate.month)
  const firstDay = getFirstDayOfMonth(calendarDate.year, calendarDate.month)
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1

  const prevMonth = () => {
    setCalendarDate((prev) => {
      if (prev.month === 0) return { year: prev.year - 1, month: 11 }
      return { ...prev, month: prev.month - 1 }
    })
  }
  const nextMonth = () => {
    setCalendarDate((prev) => {
      if (prev.month === 11) return { year: prev.year + 1, month: 0 }
      return { ...prev, month: prev.month + 1 }
    })
  }

  const isDateDisabled = (day: number) => {
    const date = new Date(calendarDate.year, calendarDate.month, day)
    const todayMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    )
    const dayOfWeek = date.getDay()
    return date < todayMidnight || dayOfWeek === 0
  }

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getFullYear() === calendarDate.year &&
      selectedDate.getMonth() === calendarDate.month &&
      selectedDate.getDate() === day
    )
  }

  const isToday = (day: number) => {
    return (
      today.getFullYear() === calendarDate.year &&
      today.getMonth() === calendarDate.month &&
      today.getDate() === day
    )
  }

  const canGoNext = () => {
    if (step === 0) return !!selectedService
    if (step === 1) return !!selectedDate && !!selectedTime
    if (step === 2)
      return !!name && !!phone && !!email && !!carBrand && !!carModel
    return false
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setStep(3)
  }

  const formatDate = (date: Date | null) => {
    if (!date) return ""
    return date.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='relative overflow-hidden bg-secondary-foreground/30 py-16 px-4'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none' />
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none'
          style={{ background: "var(--primary)" }}
        />
        <div className='relative max-w-3xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-6'>
            <Sparkles className='size-4 text-primary' />
            <span className='text-primary text-sm font-medium'>
              Umów się online
            </span>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight'>
            Zarezerwuj <span className='text-primary'>wizytę</span>
          </h1>
          <p className='text-foreground/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed'>
            Szybka i wygodna rezerwacja online. Wybierz usługę, termin i zostaw
            nam resztę.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-6 mt-8'>
            {[
              { icon: Shield, text: "Gwarancja jakości" },
              { icon: Zap, text: "Szybka realizacja" },
              { icon: CheckCircle2, text: "Potwierdzenie SMS" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className='flex items-center gap-2 text-sm text-foreground/60'
              >
                <Icon className='size-4 text-primary' />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-4 py-12'>
        {!submitted && (
          <div className='flex items-center justify-center mb-10'>
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div className='flex flex-col items-center gap-1'>
                  <div
                    className={cn(
                      "size-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2",
                      i < step
                        ? "bg-primary border-primary text-primary-foreground"
                        : i === step
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted/20 border-foreground/20 text-foreground/40",
                    )}
                  >
                    {i < step ? <CheckCircle2 className='size-5' /> : i + 1}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium hidden sm:block transition-colors",
                      i === step
                        ? "text-primary"
                        : i < step
                          ? "text-foreground/70"
                          : "text-foreground/30",
                    )}
                  >
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "h-[2px] flex-1 mx-2 mb-3 transition-all duration-500",
                      i < step ? "bg-primary" : "bg-foreground/10",
                    )}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {step === 0 && (
          <div className='animate-in fade-in-0 slide-in-from-right-4 duration-300'>
            <h2 className='text-2xl font-bold mb-2 text-center'>
              Wybierz usługę
            </h2>
            <p className='text-foreground/60 text-center mb-8'>
              Jaką usługę chcesz zarezerwować?
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {SERVICES.map((service) => (
                <button
                  key={service.value}
                  onClick={() => setSelectedService(service.value)}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all duration-200 cursor-pointer",
                    selectedService === service.value
                      ? "border-primary bg-primary/10"
                      : "border-foreground/10 bg-secondary-foreground/20 hover:border-primary/50 hover:bg-secondary-foreground/40",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-200",
                      selectedService === service.value
                        ? "opacity-100"
                        : "group-hover:opacity-50",
                    )}
                    style={{
                      background:
                        "radial-gradient(circle at top left, oklch(90.5% 0.182 98.111 / 0.08), transparent 60%)",
                    }}
                  />
                  <div className='flex items-start gap-3'>
                    <span className='text-2xl'>{service.icon}</span>
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center justify-between gap-2'>
                        <span className='font-semibold text-foreground'>
                          {service.label}
                        </span>
                        {selectedService === service.value && (
                          <CheckCircle2 className='size-4 text-primary shrink-0' />
                        )}
                      </div>
                      <div className='flex items-center gap-3 mt-1'>
                        <span className='text-xs text-foreground/50 flex items-center gap-1'>
                          <Clock className='size-3' /> {service.time}
                        </span>
                        <span className='text-xs font-medium text-primary'>
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className='animate-in fade-in-0 slide-in-from-right-4 duration-300'>
            <h2 className='text-2xl font-bold mb-2 text-center'>
              Wybierz termin
            </h2>
            <p className='text-foreground/60 text-center mb-8'>
              Kiedy chcesz odwiedzić nasze centrum?
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='bg-secondary-foreground/20 rounded-2xl border border-foreground/10 p-4'>
                <div className='flex items-center justify-between mb-4'>
                  <button
                    onClick={prevMonth}
                    className='size-8 rounded-lg flex items-center justify-center hover:bg-foreground/10 transition-colors'
                  >
                    <ChevronLeft className='size-4' />
                  </button>
                  <span className='font-semibold text-sm'>
                    {MONTHS_PL[calendarDate.month]} {calendarDate.year}
                  </span>
                  <button
                    onClick={nextMonth}
                    className='size-8 rounded-lg flex items-center justify-center hover:bg-foreground/10 transition-colors'
                  >
                    <ChevronRight className='size-4' />
                  </button>
                </div>

                <div className='grid grid-cols-7 mb-2'>
                  {DAYS_PL.map((d) => (
                    <div
                      key={d}
                      className='text-center text-xs text-foreground/40 font-medium py-1'
                    >
                      {d}
                    </div>
                  ))}
                </div>

                <div className='grid grid-cols-7 gap-y-1'>
                  {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1
                    const disabled = isDateDisabled(day)
                    const selected = isDateSelected(day)
                    const todayDay = isToday(day)
                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() =>
                          setSelectedDate(
                            new Date(
                              calendarDate.year,
                              calendarDate.month,
                              day,
                            ),
                          )
                        }
                        className={cn(
                          "relative aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-150 cursor-pointer font-medium",
                          selected
                            ? "bg-primary text-primary-foreground shadow-md scale-105"
                            : todayDay
                              ? "border border-primary/50 text-primary"
                              : disabled
                                ? "text-foreground/20 cursor-not-allowed"
                                : "hover:bg-primary/20 hover:text-primary text-foreground/80",
                        )}
                      >
                        {day}
                        {todayDay && !selected && (
                          <span className='absolute bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary' />
                        )}
                      </button>
                    )
                  })}
                </div>

                {selectedDate && (
                  <div className='mt-4 pt-3 border-t border-foreground/10 text-center text-sm text-foreground/60'>
                    Wybrano:{" "}
                    <span className='text-primary font-medium'>
                      {formatDate(selectedDate)}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <div className='flex items-center gap-2 mb-4'>
                  <Clock className='size-4 text-primary' />
                  <span className='font-semibold'>Dostępne godziny</span>
                </div>
                {!selectedDate ? (
                  <div className='flex flex-col items-center justify-center h-40 border-2 border-dashed border-foreground/10 rounded-2xl'>
                    <CalendarDays className='size-8 text-foreground/20 mb-2' />
                    <p className='text-foreground/40 text-sm'>
                      Najpierw wybierz datę
                    </p>
                  </div>
                ) : (
                  <div className='grid grid-cols-3 gap-2'>
                    {TIME_SLOTS.map((slot) => {
                      const unavailable = UNAVAILABLE_SLOTS.includes(slot)
                      const selected = selectedTime === slot
                      return (
                        <button
                          key={slot}
                          disabled={unavailable}
                          onClick={() => setSelectedTime(slot)}
                          className={cn(
                            "py-2 rounded-lg text-sm font-medium transition-all duration-150 border cursor-pointer",
                            selected
                              ? "bg-primary text-primary-foreground border-primary shadow-md"
                              : unavailable
                                ? "bg-foreground/5 text-foreground/20 border-foreground/5 cursor-not-allowed line-through"
                                : "bg-secondary-foreground/20 border-foreground/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground/80",
                          )}
                        >
                          {slot}
                        </button>
                      )
                    })}
                  </div>
                )}

                {selectedDate && selectedTime && selectedServiceData && (
                  <div className='mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20'>
                    <p className='text-xs text-foreground/60 mb-1'>
                      Podsumowanie terminu:
                    </p>
                    <p className='font-semibold text-sm text-primary'>
                      {selectedServiceData.label}
                    </p>
                    <p className='text-xs text-foreground/70 mt-1'>
                      {formatDate(selectedDate)} o godz. {selectedTime}
                    </p>
                    <p className='text-xs text-foreground/50'>
                      Szacowany czas: {selectedServiceData.time}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className='animate-in fade-in-0 slide-in-from-right-4 duration-300 max-w-2xl mx-auto'>
            <h2 className='text-2xl font-bold mb-2 text-center'>Twoje dane</h2>
            <p className='text-foreground/60 text-center mb-8'>
              Uzupełnij dane kontaktowe i informacje o pojeździe
            </p>

            <div className='space-y-6'>
              <div className='bg-secondary-foreground/20 rounded-2xl border border-foreground/10 p-5'>
                <div className='flex items-center gap-2 mb-4'>
                  <Car className='size-4 text-primary' />
                  <span className='font-semibold'>Dane pojazdu</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                  <div className='space-y-1.5'>
                    <label className='text-xs text-foreground/60 font-medium'>
                      Marka *
                    </label>
                    <Input
                      placeholder='np. BMW'
                      value={carBrand}
                      onChange={(e) => setCarBrand(e.target.value)}
                      className='bg-background/30'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs text-foreground/60 font-medium'>
                      Model *
                    </label>
                    <Input
                      placeholder='np. 3 Series'
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      className='bg-background/30'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs text-foreground/60 font-medium'>
                      Rok produkcji
                    </label>
                    <Select value={carYear} onValueChange={setCarYear}>
                      <SelectTrigger className='w-full bg-background/30'>
                        <SelectValue placeholder='Rok' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Rok</SelectLabel>
                          {Array.from({ length: 30 }, (_, i) => 2025 - i).map(
                            (y) => (
                              <SelectItem key={y} value={String(y)}>
                                {y}
                              </SelectItem>
                            ),
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='bg-secondary-foreground/20 rounded-2xl border border-foreground/10 p-5'>
                <div className='flex items-center gap-2 mb-4'>
                  <User className='size-4 text-primary' />
                  <span className='font-semibold'>Dane kontaktowe</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div className='space-y-1.5 sm:col-span-2'>
                    <label className='text-xs text-foreground/60 font-medium'>
                      Imię i nazwisko *
                    </label>
                    <div className='relative'>
                      <User className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40' />
                      <Input
                        placeholder='Jan Kowalski'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='pl-9 bg-background/30'
                      />
                    </div>
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs text-foreground/60 font-medium'>
                      Telefon *
                    </label>
                    <div className='relative'>
                      <Phone className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40' />
                      <Input
                        placeholder='+48 123 456 789'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='pl-9 bg-background/30'
                        type='tel'
                      />
                    </div>
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-xs text-foreground/60 font-medium'>
                      Email *
                    </label>
                    <div className='relative'>
                      <Mail className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40' />
                      <Input
                        placeholder='jan@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='pl-9 bg-background/30'
                        type='email'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-secondary-foreground/20 rounded-2xl border border-foreground/10 p-5'>
                <div className='flex items-center gap-2 mb-4'>
                  <Wrench className='size-4 text-primary' />
                  <span className='font-semibold'>Dodatkowe informacje</span>
                  <span className='text-xs text-foreground/40'>
                    (opcjonalnie)
                  </span>
                </div>
                <Textarea
                  placeholder='Opisz dokładniej problem z pojazdem lub dodaj inne uwagi...'
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className='bg-background/30 min-h-24 resize-none'
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && submitted && (
          <div className='animate-in fade-in-0 zoom-in-95 duration-500 max-w-lg mx-auto text-center'>
            <div className='relative mb-8'>
              <div
                className='size-24 rounded-full flex items-center justify-center mx-auto relative overflow-hidden'
                style={{ background: "oklch(90.5% 0.182 98.111 / 0.15)" }}
              >
                <div
                  className='absolute inset-0 animate-ping opacity-30 rounded-full'
                  style={{ background: "oklch(90.5% 0.182 98.111 / 0.3)" }}
                />
                <CheckCircle2 className='size-12 text-primary relative z-10' />
              </div>
            </div>
            <h2 className='text-3xl font-bold mb-2'>
              Rezerwacja potwierdzona!
            </h2>
            <p className='text-foreground/60 mb-8'>
              Dziękujemy, {name}! Potwierdzenie zostało wysłane na{" "}
              <span className='text-primary'>{email}</span>.
            </p>

            <div className='bg-secondary-foreground/20 rounded-2xl border border-foreground/10 p-6 text-left space-y-4 mb-8'>
              <h3 className='font-semibold text-center text-foreground/80 mb-4'>
                Szczegóły rezerwacji
              </h3>

              {[
                {
                  label: "Usługa",
                  value: selectedServiceData?.label,
                  icon: Wrench,
                },
                {
                  label: "Data",
                  value: formatDate(selectedDate),
                  icon: CalendarDays,
                },
                { label: "Godzina", value: selectedTime, icon: Clock },
                {
                  label: "Pojazd",
                  value: `${carBrand} ${carModel}${carYear ? ` (${carYear})` : ""}`,
                  icon: Car,
                },
                { label: "Telefon", value: phone, icon: Phone },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className='flex items-center gap-3'>
                  <div className='size-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0'>
                    <Icon className='size-4 text-primary' />
                  </div>
                  <div>
                    <p className='text-xs text-foreground/40'>{label}</p>
                    <p className='text-sm font-medium'>{value}</p>
                  </div>
                </div>
              ))}

              {selectedServiceData && (
                <div className='pt-3 mt-3 border-t border-foreground/10 flex justify-between items-center'>
                  <span className='text-sm text-foreground/60'>
                    Szacowany koszt
                  </span>
                  <span className='font-bold text-primary text-lg'>
                    {selectedServiceData.price}
                  </span>
                </div>
              )}
            </div>

            <Button
              onClick={() => {
                setStep(0)
                setSubmitted(false)
                setSelectedService("")
                setSelectedDate(null)
                setSelectedTime("")
                setName("")
                setPhone("")
                setEmail("")
                setCarBrand("")
                setCarModel("")
                setCarYear("")
                setNotes("")
              }}
              variant='outline'
              className='w-full'
            >
              Utwórz nową rezerwację
            </Button>
          </div>
        )}

        {!submitted && (
          <div className='flex items-center justify-between mt-10 max-w-2xl mx-auto'>
            <Button
              variant='outline'
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className='gap-2 px-6'
            >
              <ChevronLeft className='size-4' />
              Wstecz
            </Button>

            <div className='flex items-center gap-2'>
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === step
                      ? "w-6 bg-primary"
                      : i < step
                        ? "w-3 bg-primary/50"
                        : "w-3 bg-foreground/20",
                  )}
                />
              ))}
            </div>

            {step < 2 ? (
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canGoNext()}
                className='gap-2 px-6 font-semibold'
              >
                Dalej
                <ChevronRight className='size-4' />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canGoNext()}
                className='gap-2 px-6 font-semibold bg-primary hover:bg-primary/80'
              >
                <CheckCircle2 className='size-4' />
                Zarezerwuj
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
