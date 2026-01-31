'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LifestyleBreak() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[50vh] md:h-[60vh] overflow-hidden"
    >
      <Image
        src="/hero-customers.png"
        alt="Lifestyle"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </motion.section>
  );
}
