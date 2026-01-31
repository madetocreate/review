'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const industryKeys = ['gastro', 'retail', 'health', 'beauty', 'auto', 'services'] as const;

export default function SuccessStories() {
  const t = useTranslations('successStories');
  const ti = useTranslations('industries');

  return (
    <section id="success-stories" className="py-28 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16"
        >
          {t('title')}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <Image
              src="/cafe-interior.png"
              alt="Happy cafe"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-200 mb-8">
              &ldquo;{t('story1')}&rdquo;
            </p>
            <p className="text-accent font-semibold text-lg">{t('story1Author')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-300">
            {ti('title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industryKeys.map((key, i) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {ti(key)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
