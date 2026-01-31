'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { StarHalf, Smartphone, TrendingUp } from 'lucide-react';

const benefits = [
  { key: 'benefit1', icon: StarHalf },
  { key: 'benefit2', icon: Smartphone },
  { key: 'benefit3', icon: TrendingUp },
];

export default function Benefits() {
  const t = useTranslations('benefits');

  return (
    <section id="benefits" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(b.key + 'Title')}</h3>
                <p className="text-gray-500 leading-relaxed">{t(b.key + 'Desc')}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
