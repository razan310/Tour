import Image from 'next/image'
import girl from './../../app/assets/images/girl.png'

const ContactUs = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-48 md:px-7 lg:px-16 xl:px-40 2xl:px-60 lg:p-5 px-5 bg-gradient-to-b from-orange-200 to-orange-300">
      {/* الصندوق الرئيسي مع النص */}
      <div className='flex flex-col justify-around bg-white-20 rounded-3xl p-3 m-8 w-full lg:w-[569px] h-auto lg:h-[330px]'>
        <h1 className='text-center font-extrabold text-gray-800 text-2xl lg:text-3xl mt-4'>Get Special Offers for Organizations</h1>
        <p className='text-center font-normal text-base lg:text-lg text-gray-700 px-5 lg:px-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <div className='flex justify-center w-full'>
            <button className='bg-orange-500 rounded-full py-2 px-8 text-white font-semibold mt-4'>
                Contact Us
            </button>
        </div>
      </div>

      {/* الصورة، يتم تعديلها على الشاشات الصغيرة والمتوسطة */}
      <div className="lg:absolute lg:bottom-0 lg:right-0 mt-6 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
        <Image 
          src={girl} 
          alt='girl' 
          height={600} 
          width={427} 
          className='lg:mr-3 xl:mr-8 2xl:mr-33 object-cover max-w-full h-auto'
        /> 
      </div>
    </div>
  )
}

export default ContactUs
