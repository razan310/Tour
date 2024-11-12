import { StaticImageData } from 'next/image';
import book1 from './../assets/images/Book1.png';
import book2 from './../assets/images/book2.png';
import book3 from './../assets/images/book3.png';
import book4 from './../assets/images/book4.png';
import icon1 from './../assets/images/1.svg'; 
import icon2 from './../assets/images/2.svg'; 
import icon3 from './../assets/images/3.svg';
import icon4 from './../assets/images/4.svg';
import icon5 from './../assets/images/5.svg';
import icon6 from './../assets/images/6.svg';
import icon7 from './../assets/images/7.svg';
import icon8 from './../assets/images/8.svg';
import icon9 from './../assets/images/9.svg';
import icon10 from './../assets/images/10.svg';
import icon11 from './../assets/images/11.svg';

export interface PackagesData {
    title: string;
    image: StaticImageData;
    number: string;
    list: {
        icon: StaticImageData;
        description: string;
    }[];
}

export const packagesData: PackagesData[] = [
  {
    title: 'BIKE / RICKSHAW',
    image: book1,
    number: '10',
    list: [
      {
        icon: icon1,
        description: 'Your bike for a day',
      },
      {
        icon: icon2,
        description: 'City App',
      },
      {
        icon: icon6,
        description: 'Discount on Rickshaw',
      },
      {
        icon: icon4,
        description: 'Guaranteed Support',
      },
    ],
  },
  {
    title: 'BIKE TOURS',
    image: book2,
    number: '30',
    list: [
      {
        icon: icon5,
        description: 'A Mountain Bike Included',
      },
      {
        icon: icon6,
        description: 'A Guide For You',
      },
      {
        icon: icon7,
        description: 'Bottle of water',
      },
      {
        icon: icon8,
        description: 'Guaranteed Support',
      },
    ],
  },
  {
    title: 'BUS TRIPS',
    image: book3,
    number: '45',
    list: [
      {
        icon: icon9,
        description: 'Park ticket',
      },
      {
        icon: icon10,
        description: 'Return bus',
      },
      {
        icon: icon11,
        description: 'Companion',
      },
      {
        icon: icon5,
        description: 'Guaranteed Support',
      },
    ],
  },
  {
    title: 'TRANSFER',
    image: book4,
    number: '10',
    list: [
      {
        icon: icon6,
        description: 'Personal Driver',
      },
      {
        icon: icon4,
        description: 'Wherever You Want',
      },
      {
        icon: icon1,
        description: 'At the best price',
      },
      {
        icon: icon2,
        description: 'Guaranteed Support',
      },
    ],
  },
];
