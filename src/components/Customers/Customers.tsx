'use client';

import { useState } from 'react';
import Card from '../Card/Card';
import { customersData } from './../../app/data/customersData';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import ScrollFadeIn from '../common/ScrollFadeIn';

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(customersData.length / itemsPerPage);

  const visibleCustomers = customersData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <ScrollFadeIn>
      <div className="font-extrabold text-3xl text-gray-800 mt-20 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5">
        <div className="flex flex-col md:flex-row gap-5 align-middle justify-between text-center md:text-start">
          <h1>Happy Customers Says</h1>
          <div className="flex justify-center gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`p-1 bg-gray-200 text-gray-800 rounded-full border border-orange-400 ${
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

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {visibleCustomers.map((customer, index) => (
            <Card
              key={index}
              img={customer.img}
              name={customer.full_name}
              disc={customer.disc}
            />
          ))}
        </div>
      </div>
    </ScrollFadeIn>
  );
};

export default Customers;
