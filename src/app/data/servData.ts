import { StaticImageData } from 'next/image';
import serv1 from './../assets/images/serv1.png';
import serv2 from './../assets/images/serv2.png';
import serv3 from './../assets/images/serv3.png';
import serv4 from './../assets/images/serv4.png';

interface ServData {
  title: string;
  description: string;
  image: StaticImageData;
}

export const servData: ServData[] = [
  {
    title: 'Bike and rickshaw rental',
    description: 'Book your quality vehicle quickly for an hour or all day!',
    image: serv1
,
  },
  {
    title: 'Guided tour of the countryside',
    description: 'Live the real Lucchese experience by visiting the suburbs by bike!',
    image: serv2,
  },
  {
    title: 'Taxi and NCC service',
    description: 'Do you need not only a bike but also a driver? Then you have found the right place!',
    image: serv4,
  },
  {
    title: 'Bus Package',
    description: 'Do you need not only a bike but also a driver? Then you have found the right place!',
    image: serv3,
  },
];
