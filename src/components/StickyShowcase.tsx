'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { QrCode, Filter, Star } from 'lucide-react';

const cards = [
  { key: 'step1', icon: QrCode, color: '#064e3b', top: 120 },
  { key: 'step2', icon: Filter, color: '#065f46', top: 150 },
  { key: 'step3', icon: Star, color: '#047857', top: 180 },
];

export default function StickyShowcase() {
  const t = useTranslations('showcase');
  const tHow = useTranslations('howItWorks');

  return (
    <section id="showcase" className="relative bg-black">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{t('title')}</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t('description')}</p>
        </motion.div>
      </div>

      <div className="relative px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-6 pt-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={card.key} className="sticky" style={{ top: card.top }}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-3xl border border-white/10 p-10 md:p-14 backdrop-blur-sm shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, ' + card.color + '40 0%, rgba(0,0,0,0.8) 100%)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-accent text-sm font-bold mb-2">{'0' + (i + 1)}</div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{tHow(card.key + 'Title')}</h3>
                      <p className="text-white/60 text-lg leading-relaxed">{tHow(card.key + 'Desc')}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
