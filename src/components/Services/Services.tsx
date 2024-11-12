
import { servData } from '@/app/data/servData';
import ServCard from './ServCard';

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5  ">
      {servData.map((serv, index) => (
        <ServCard key={index} title={serv.title} image={serv.image} description={serv.description}/>
      ))}
    </div>
  );
};

export default Services;
