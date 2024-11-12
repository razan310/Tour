import Image from "next/image";
import homeImg from './../../app/assets/images/homeHero.png';
import FormTour from "../Formhero/FormTour";
import {buttonValue}from './../../app/data/FormHeroData'
const HomeHero = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image 
          src={homeImg}
          alt="about hero"
          quality={100}
          layout="fill"           // لجعل الصورة تملأ الحاوية
          objectFit="cover"       // لجعل الصورة تغطي كامل الحاوية بدون تشويه
          priority={true}         // لتحميل الصورة بشكل أسرع
        />
        
        {/* الحاوية الخاصة بالنص */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold md:mb-4  font-podcastFont ">Enjoy in the best way!</h1>
          <p className="md:mb-6 max-w-xl text-center font-medium lg:font-bold text-base lg:text-lg 2xl:text-2xl">
              Enjoy our services for your trip anytime
          </p>
          <FormTour buttonValue={buttonValue}/>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
