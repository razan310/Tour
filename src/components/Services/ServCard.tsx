import Image, { StaticImageData } from 'next/image';


interface ServCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const ServCard: React.FC<ServCardProps> = ({ title, description, image }) => {
  return (
    <div className="w-full overflow-hidden p-4">
      <Image src={image} alt={title} height={404} className="w-full rounded-lg object-cover" />
      
      <div className="p-4 bg-white">
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        <p className="text-sm font-normal text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServCard;
