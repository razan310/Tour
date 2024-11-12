import React from 'react'
import Form from '../Form/Form'
import Image from 'next/image'
import bike from './../../app/assets/images/bike.png'

const Book = () => {
    return (
        <div className="relative flex flex-col xl:flex-row items-center justify-between mt-10 md:mt-20 xl:mt-48 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5 bg-gradient-to-b from-orange-200 to-orange-300">
            {/* مكون الفورم */}
            <Form />
            
            {/* مكون الصورة */}
            <div className="xl:absolute xl:bottom-0 xl:right-0 mt-6 xl:mt-0 flex justify-center xl:justify-end w-full xl:w-auto">
                <Image 
                    src={bike} 
                    alt="bike" 
                    width={724} 
                    height={542} 
                    className="object-cover xl:w-[500px] 2xl:w-[724px] xl:mr-14 2xl:mr-14 max-w-full h-auto"
                />
            </div>
        </div>
    )
}

export default Book
