import React from 'react';
import Advantage from './../Advantage/Advantage';
import {advantagesData} from './../../app/data/advantagesData';

const Advantages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5 bg-gradient-to-b from-orange-200 to-orange-300 ">
      {advantagesData.map((advantage, index) => (
        <Advantage key={index} icon={advantage.icon} title={advantage.title} />
      ))}
    </div>
  );
};

export default Advantages;
