import Image, { StaticImageData } from 'next/image';
import people from './../../app/assets/images/card1.svg';
import Gal from './../../app/assets/images/card2.svg';

interface DestinantionsCardProps {
  title: string;
  price?: number;
  time?: string;
  number?: string;
  description: string;
  image: StaticImageData;
}

const DestinantionsCard: React.FC<DestinantionsCardProps> = ({ title, price, description, image, time, number }) => {
  return (
    <div className="w-full overflow-hidden p-4">
      <Image src={image} alt={title} height={404} className="w-full rounded-lg object-cover" />
      
      <div className="p-4 bg-white">
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        <p className="flex items-center gap-2 text-lg text-orange-500 mt-1">
          <span className='text-gray-800 text-base font-normal'>From</span> {price} €
        </p>
        
        <div className="flex flex-wrap justify-between items-center text-orange-500 mt-3">
          <div className="flex items-center gap-2">
            <Image src={Gal} alt='icon' height={24} width={24}/> 
            <p className=" text-sm font-normal">{time}</p>
          </div>

          <div className="flex items-center gap-2">
            <Image src={people} alt='icon' height={24} width={24}/> 
            <p className=" text-sm font-normal">{number}</p>
          </div>
        </div>

        <p className="text-sm font-normal text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default DestinantionsCard;
