import w_people from './../assets/images/w_people.svg';
import world from './../assets/images/public.svg';
import Image, { StaticImageData } from 'next/image';


export interface ButtonValue {
  icon: StaticImageData; // استخدم StaticImageData للصور الثابتة
  title: string;
  class: string;
}

export const buttonValue: ButtonValue[] = [
  {
    title: 'Public Tours',
    icon: world,
    class: 'flex gap-1 bg-white text-orange-500 py-2 px-4 rounded-tl'
  },
  {
    title: 'Private Tours',
    icon: w_people,
    class: 'flex gap-1 bg-white-20 text-white py-2 px-4 rounded-tr'
  }
];

