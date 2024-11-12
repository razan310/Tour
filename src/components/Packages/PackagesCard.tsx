import Image from "next/image";
import { PackagesData } from "./../../app/data/packagesData"; // استيراد النوع

interface PackagesCardProps {
  data: PackagesData ;
}

const PackagesCard = ({ data }: PackagesCardProps) => {
    return (
        <div className="flex flex-col justify-between w-full border shadow-sm rounded-2xl overflow-hidden ">
        <div>
            <Image src={data.image} alt={data.title} height={404} className="w-full rounded-lg object-cover" />
        </div>

        <div className="p-4 bg-white">
            <h1 className="text-xl font-extrabold text-gray-800">{data.title}</h1>
            <p className="text-sm font-normal text-gray-500">
                €{'\u00A0'} 
                <span className="text-orange-500 text-2xl font-black oldstyle-nums">{data.number}{'\u00A0'}</span>
                /day
            </p>
            {data.list.map((item, index) => (
            <div key={index} className="flex items-center mt-2">
                <Image src={item.icon} alt={item.description} height={24} width={24} className="mr-2" />
                <p className="text-sm font-normal text-gray-600">{item.description}</p>
            </div>
            ))}
            
        </div>
        <div className="px-2">
            <button className="w-full p-2 my-3 text-sm font-normal border rounded-50 border-orange-400 text-orange-400 mt-4">Book Now</button>
        </div>
        </div>
    );
};

export default PackagesCard;
