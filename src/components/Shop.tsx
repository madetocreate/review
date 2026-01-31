'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const tiers = [
  { key: 'starter', price: '49', popular: false },
  { key: 'professional', price: '99', popular: true },
  { key: 'enterprise', price: '199', popular: false },
] as const;

export default function Shop() {
  const t = useTranslations('shop');

  return (
    <section id="shop" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 text-center mb-16 max-w-2xl mx-auto"
        >
          {t('description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={
                'relative rounded-2xl p-8 backdrop-blur-sm ' +
                (tier.popular
                  ? 'border-2 border-emerald-500 bg-emerald-500/5'
                  : 'border border-white/10 bg-white/5')
              }
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {t('popular')}
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {t(tier.key)}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">€{tier.price}</span>
                <span className="text-white/40 text-sm">{t('perMonth')}</span>
              </div>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t(tier.key + 'Desc')}
              </p>
              <button
                className={
                  'w-full py-3 rounded-xl font-medium transition-colors duration-300 ' +
                  (tier.popular
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400'
                    : 'bg-white/10 text-white hover:bg-white/20')
                }
              >
                {t('buyNow')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
