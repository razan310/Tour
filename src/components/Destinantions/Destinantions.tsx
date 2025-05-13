'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { useState } from 'react';
import DestinantionsCard from '../DestinantionsCard/DestinantionsCard';
import { destinationsData } from './../../app/data/destinationsData';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

const Destinantions = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(destinationsData.length / itemsPerPage);

  const visibleDestinations = destinationsData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // scroll reveal logic
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="font-extrabold text-3xl text-gray-800 mt-20 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5"
    >
      <div className="flex flex-col md:flex-row gap-5 align-middle justify-between text-center md:text-start">
        <h1>Happy Customers Says</h1>

        <div className="flex justify-center gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`p-1 bg-gray-200 text-gray-800 rounded-full ${
              currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`p-1 bg-orange-500 text-white rounded-full ${
              currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {visibleDestinations.map((destination, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4"
          >
            <DestinantionsCard
              title={destination.title}
              price={destination.price}
              description={destination.description}
              image={destination.image}
              time={destination.time}
              number={destination.number}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Destinantions;
