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
    <section id="shop" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={
                'relative rounded-3xl p-8 ' +
                (tier.popular
                  ? 'bg-gray-900 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 border border-gray-200')
              }
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t('popular')}
                </span>
              )}
              <h3 className={'text-xl font-semibold mb-2 ' + (tier.popular ? 'text-white' : 'text-gray-900')}>
                {t(tier.key)}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={'text-4xl font-bold ' + (tier.popular ? 'text-white' : 'text-gray-900')}>
                  {'€' + tier.price}
                </span>
                <span className={tier.popular ? 'text-gray-400 text-sm' : 'text-gray-400 text-sm'}>
                  {t('perMonth')}
                </span>
              </div>
              <p className={'mb-8 leading-relaxed ' + (tier.popular ? 'text-gray-300' : 'text-gray-500')}>
                {t(tier.key + 'Desc')}
              </p>
              <button
                className={
                  'w-full py-3 rounded-full font-medium transition-colors ' +
                  (tier.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800')
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
