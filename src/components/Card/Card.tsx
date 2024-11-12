import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

interface CardProps {
    img: string ;
    name: string;
    disc: string;
}

const Card: React.FC<CardProps> = ({ img, name, disc }) => {
    return (
        <div className="flex flex-col items-center gap-3 border rounded-lg m-4 p-4">
            <Image src={img} alt={name} height={80} width={80} className="rounded-full" />
            <p className='text-gray-700 text-lg font-normal'>{name}</p>
            <div className='w-full flex justify-start'>
                <BiSolidQuoteAltRight  className='text-orange-100 text-5xl text-left'/>
            </div>
            <p className='text-gray-700 text-lg font-normal'>{disc}</p>
            <div className='w-full flex justify-end'>
                <BiSolidQuoteAltRight  className='text-orange-100 text-5xl text-left'/>
            </div>
        </div>
    );
};

export default Card;
