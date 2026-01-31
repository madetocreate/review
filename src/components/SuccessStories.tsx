'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const industryKeys = ['gastro', 'retail', 'health', 'beauty', 'auto', 'services'] as const;

export default function SuccessStories() {
  const t = useTranslations('successStories');
  const ti = useTranslations('industries');

  return (
    <section id="success-stories" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          {t('title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 text-center"
        >
          <p className="text-xl text-white/80 italic leading-relaxed mb-6">
            &ldquo;{t('story1')}&rdquo;
          </p>
          <p className="text-emerald-400 font-medium">{t('story1Author')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            {ti('title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industryKeys.map((key, i) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-colors duration-300"
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
