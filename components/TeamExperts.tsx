import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { expertData } from "@/data/expertData"

const TeamExperts = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center   md:p-16 p-4 gap-4'>
      <div className='w-full flex flex-col items-center gap-6 px-8'>
        <h2 className='text-4xl text-center font-bold'>
          Poznaj nasz <span className='text-primary'>zespół ekspertów</span>
        </h2>
        <p className='max-w-xl text-center text-xl'>
          Nasi certyfikowani technicy łączą w sobie dziesiątki lat doświadczenia
          i pasję do doskonałości w motoryzacji
        </p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {expertData.map((expert) => (
          <Card key={expert.id} className='w-full bg-secondary-foreground'>
            <CardHeader>
              <Image
                src={expert.image}
                alt={`${expert.name} – ${expert.position} w AutoCare Center`}
                width={768}
                height={512}
                className='object-cover object-center rounded-xl'
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{expert.name}</CardTitle>
              <CardDescription>{expert.position}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardDescription>{expert.description}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default TeamExperts
