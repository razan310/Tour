import { StaticImageData } from 'next/image';
import parisImage from './../assets/images/Destinantions1.png';
import londonImage from './../assets/images/Destinantions2.png';
import romeImage from './../assets/images/Destinantions3.png';
import barcelonaImage from './../assets/images/Destinantions4.png';
import amsterdamImage from './../assets/images/Destinantions1.png';
import berlinImage from './../assets/images/Destinantions4.png';
import veniceImage from './../assets/images/Destinantions2.png';

interface Destination {
  title: string;
  price: number;
  time: string;
  number: string;
  description: string;
  image: StaticImageData;
}

export const destinationsData: Destination[] = [
  {
    title: 'Lucca Bike Tour',
    price: 34,
    time:'EVERY DAY',
    number:'3-10 PP',
    description: 'A tour of the city and its surroundings led by a professional guide ...',
    image: parisImage,
  },
  {
    title: 'Wine tasting In Tuscany',
    price: 45,
    time:'MONDAY',
    number:'10-50 PP',
    description: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    image: londonImage,
  },
  {
    title: 'Cinque Terre Tour',
    price: 39,
    time:'TO BE DECIDED',
    number:'10-50 PP',
    description: 'Visit the beautiful Siena and the cities that surround it to experience ...',
    image: romeImage,
  },
  {
    title: 'Siena and Surroundings',
    price: 30,
    time:'TO BE DECIDED',
    number:'10-50 PP',
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    image: barcelonaImage,
  },
  {
    title: 'Siena and Surroundings',
    price: 32,
    time:'TO BE DECIDED',
    number:'10-50 PP',
    description: 'Cycle through the canals and charming streets of Amsterdam.',
    image: amsterdamImage,
  },
  {
    title: 'Siena and Surroundings',
    price: 28,
    time:'TO BE DECIDED',
    number:'10-50 PP',
    description: 'Witness the modern and historical wonders of Berlin.',
    image: berlinImage,
  },
  {
    title: 'Siena and Surroundings',
    price: 50,
    time:'TO BE DECIDED',
    number:'10-50 PP',
    description: 'Experience the unique beauty and canals of Venice.',
    image: veniceImage,
  },
];
