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
  const ts = useTranslations('stats');

  return (
    <section id="benefits" className="relative py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`${b.key}Title`)}</h3>
                <p className="text-white/50 leading-relaxed">{t(`${b.key}Desc`)}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            { value: '4.8', label: ts('avgRating'), suffix: '★' },
            { value: '97', label: ts('positive'), suffix: '%' },
            { value: '+35', label: ts('moreGuests'), suffix: '%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <div className="text-3xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}<span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
