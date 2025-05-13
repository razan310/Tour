'use client';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from "react-simple-typewriter";

import homeImg from './../../app/assets/images/homeHero.png';
import FormTour from "../Formhero/FormTour";
import { buttonValue } from './../../app/data/FormHeroData';

const HomeHero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* ✅ صورة الخلفية */}
      <Image
        src={homeImg}
        alt="about hero"
        quality={100}
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* ✅ النص مع الأنميشن */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold md:mb-4 font-podcastFont"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enjoy in the best way!
        </motion.h1>

        <motion.p
          className="md:mb-6 max-w-xl text-center font-medium lg:font-bold text-base lg:text-lg 2xl:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          
        >
          <Typewriter
            words={['Enjoy our services for your trip anytime']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <FormTour buttonValue={buttonValue} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
