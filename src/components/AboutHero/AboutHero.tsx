import Image from "next/image";
import aboutImg from "../../app/assets/images/aboutHero.png";

const AboutHero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image 
          src={aboutImg}
          alt="about hero"
          quality={100}
          layout="fill"           // لجعل الصورة تملأ الحاوية
          objectFit="cover"       // لجعل الصورة تغطي كامل الحاوية بدون تشويه
          priority={true}         // لتحميل الصورة بشكل أسرع
      />
      
      {/* الحاوية الخاصة بالنص */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold mb-4 font-podcastFont">Our team cares about your full relax</h1>
        <p className="mb-6 max-w-xl text-center font-medium lg:font-bold text-base lg:text-lg 2xl:text-2xl">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
          born and I will give you a complete account of the system, and expound the actual teachings of the great 
          explorer of the truth, the master-builder of human happiness.
        </p>
        <button className="px-6 py-2  rounded-50 border border-text-white text-white font-semibold">
          View our Tour Packages
        </button>
      </div>
    </div>
  );
}

export default AboutHero;
