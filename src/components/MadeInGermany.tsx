'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Award, Leaf } from 'lucide-react';

const qualities = [
  { key: 'quality1', icon: Shield },
  { key: 'quality2', icon: Award },
  { key: 'quality3', icon: Leaf },
];

export default function MadeInGermany() {
  const t = useTranslations('madeInGermany');

  return (
    <section className="py-28 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t('label')}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t('title')}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">{t('description')}</p>

            <div className="space-y-6">
              {qualities.map((q, i) => {
                const Icon = q.icon;
                return (
                  <motion.div
                    key={q.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{t(q.key + 'Title')}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{t(q.key + 'Desc')}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="text-[180px] md:text-[220px] font-black text-white/5 leading-none select-none">DE</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 text-lg">{t('badge')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
