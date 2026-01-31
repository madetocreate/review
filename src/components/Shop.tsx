'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  { key: 'starter', price: '49', popular: false, features: ['feature1', 'feature2', 'feature3'] },
  { key: 'professional', price: '99', popular: true, features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'] },
  { key: 'enterprise', price: '199', popular: false, features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'] },
] as const;

export default function Shop() {
  const t = useTranslations('shop');

  return (
    <section id="shop" className="py-28 bg-gray-50">
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={
                'relative rounded-3xl overflow-hidden ' +
                (tier.popular
                  ? 'bg-accent text-white shadow-2xl ring-2 ring-accent md:scale-105 md:-my-4 md:py-4'
                  : 'bg-white border border-gray-200 shadow-sm')
              }
            >
              {tier.popular && (
                <div className="bg-accent text-white text-center text-xs font-bold py-2 uppercase tracking-wider">
                  {t('popular')}
                </div>
              )}
              <div className="p-8 lg:p-10">
                <h3 className={'text-lg font-semibold mb-1 ' + (tier.popular ? 'text-white' : 'text-gray-900')}>
                  {t(tier.key)}
                </h3>
                <p className={'text-sm mb-6 ' + (tier.popular ? 'text-gray-400' : 'text-gray-500')}>
                  {t(tier.key + 'Desc')}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={'text-5xl font-bold tracking-tight ' + (tier.popular ? 'text-white' : 'text-gray-900')}>
                    {'€' + tier.price}
                  </span>
                  <span className={'text-sm ' + (tier.popular ? 'text-gray-400' : 'text-gray-400')}>
                    {t('perMonth')}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className={'w-5 h-5 rounded-full flex items-center justify-center shrink-0 ' + (tier.popular ? 'bg-white' : 'bg-accent')}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className={'text-sm ' + (tier.popular ? 'text-gray-300' : 'text-gray-600')}>
                        {t(tier.key + '_' + f)}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={
                    'w-full py-4 rounded-full font-semibold text-base transition-all ' +
                    (tier.popular
                      ? 'bg-white text-accent hover:bg-white/90 shadow-lg shadow-white/25 font-bold'
                      : 'bg-accent text-white hover:bg-accent/90')
                  }
                >
                  {t('buyNow')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
