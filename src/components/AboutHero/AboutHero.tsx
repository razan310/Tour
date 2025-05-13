'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImg from "../../app/assets/images/aboutHero.png";

const AboutHero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'Our team cares about your full relax';
  const speed = 50;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedTitle((prev) => prev + fullTitle[index]);
      index++;
      if (index >= fullTitle.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Image
        src={aboutImg}
        alt="about hero"
        quality={100}
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold mb-4 font-podcastFont"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {typedTitle}
        </motion.h1>

        <motion.p
          className="mb-6 max-w-xl text-center font-medium lg:font-bold text-base lg:text-lg 2xl:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
          born and I will give you a complete account of the system, and expound the actual teachings of the great 
          explorer of the truth, the master-builder of human happiness.
        </motion.p>

        <motion.button
          className="px-6 py-2 rounded-50 border border-white text-white font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          View our Tour Packages
        </motion.button>
      </div>
    </div>
  );
};

export default AboutHero;
