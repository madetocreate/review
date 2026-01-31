'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
        <motion.a
          href="#shop"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-gray-900 text-white font-semibold px-10 py-4 rounded-full hover:bg-gray-800 transition-colors text-lg"
        >
          {t('button')}
        </motion.a>
      </div>
    </section>
  );
}
