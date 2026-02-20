import { Headset, Image as ImageIcon,Star, Trophy } from "lucide-react";

export const statsGallery = [
  {
    id: 1,
    title: '500+',
    subtitle: 'Zdjęcia serwisowe',
    icon: <ImageIcon className='w-12 h-12' />,
  },
  {
    id: 2,
    title: '5.0',
    subtitle: 'Średnia ocena',
    icon: <Star className='w-12 h-12' />,
  },
  {
    id: 3,
    title: '15+',
    subtitle: 'Zdobyte nagrody',
    icon: <Trophy className='w-12 h-12' />,
  },
  {
    id: 4,
    title: 'Wsparcie',
    subtitle: '24/7',
    icon: <Headset className='w-12 h-12' />,
  },
]