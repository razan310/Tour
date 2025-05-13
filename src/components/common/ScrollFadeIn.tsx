'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

const ScrollFadeIn = ({
  children,
  yOffset = 80,
  duration = 0.8,
  delay = 0,
}: ScrollFadeInProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
