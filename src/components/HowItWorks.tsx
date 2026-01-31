'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { QrCode, Filter, Star } from 'lucide-react';

const steps = [
  { key: 'step1', icon: QrCode },
  { key: 'step2', icon: Filter },
  { key: 'step3', icon: Star },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="relative py-32 bg-black overflow-hidden">
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
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t('description')}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-xs text-accent font-bold mb-2">0{i + 1}</div>
                  <h3 className="text-xl font-semibold mb-3">{t(`${step.key}Title`)}</h3>
                  <p className="text-white/50 leading-relaxed">{t(`${step.key}Desc`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
