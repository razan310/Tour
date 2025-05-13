'use client';

import { servData } from '@/app/data/servData';
import ServCard from './ServCard';
import ScrollFadeIn from '../common/ScrollFadeIn';

const Services: React.FC = () => {
  return (
    <ScrollFadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5">
        {servData.map((serv, index) => (
          <ServCard
            key={index}
            title={serv.title}
            image={serv.image}
            description={serv.description}
          />
        ))}
      </div>
    </ScrollFadeIn>
  );
};

export default Services;
