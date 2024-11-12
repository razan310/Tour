
import Image, { StaticImageData } from 'next/image';

interface AdvantageProps {
  icon: StaticImageData;
  title: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title }) => (
  <div className="flex flex-col items-center space-y-2 p-5 bg-white-20 rounded-2xl">
    <Image src={icon} alt={title} width={60} height={60} className="text-orange-500 my-2" />
    <p className="text-center text-xl font-semibold text-gray-800">{title}</p>
  </div>
);

export default Advantage;
