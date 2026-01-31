'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const ts = useTranslations('stats');

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {t('badge')}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-gray-900 mb-6"
            >
              {t('title').split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#shop" className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-center">
                {t('cta')}
              </a>
              <a href="#how-it-works" className="px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors text-center">
                {t('ctaSecondary')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-10 mt-14 pt-8 border-t border-gray-100"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">4.8★</div>
                <div className="text-sm text-gray-400 mt-1">{ts('avgRating')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">97%</div>
                <div className="text-sm text-gray-400 mt-1">{ts('positive')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">+35%</div>
                <div className="text-sm text-gray-400 mt-1">{ts('moreGuests')}</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/hero-owner.png"
                alt="Restaurant owner"
                width={896}
                height={512}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
