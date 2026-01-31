'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden px-8 py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(0,0,0,0.8) 50%, rgba(16,185,129,0.1) 100%)',
          }}
        >
          <div className="absolute inset-0 border border-emerald-500/20 rounded-3xl" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
            {t('title')}
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            {t('subtitle')}
          </p>
          <a
            href="#shop"
            className="relative z-10 inline-block bg-emerald-500 text-black font-semibold px-8 py-4 rounded-xl hover:bg-emerald-400 transition-colors duration-300"
          >
            {t('button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
