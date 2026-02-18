import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

import type { Stats } from "../types/typeStats"

const Stats = ({Data}: {Data: Stats[]}) => {
  return (
    <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center overflow-hidden py-4'>
      {Data.map((stat: Stats, index: number) => (
        <Card
          key={index}
          className='w-full max-w-[200px] flex flex-col items-center justify-between bg-transparent ring-0
            hover:scale-110 transition-all duration-500 ease-in-out'
        >
          <CardHeader className='w-full flex items-center justify-center text-primary'>{stat.icon}</CardHeader>
          <CardContent>
            <CardTitle className='text-center text-2xl font-bold text-primary'>{stat.title}</CardTitle>
          </CardContent>
          <CardFooter>
            <CardDescription className='text-center'>{stat.subtitle}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Stats
