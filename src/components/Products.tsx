'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Monitor, CreditCard, LayoutGrid } from 'lucide-react';

const products = [
  { key: 'tableDisplay', icon: Monitor },
  { key: 'nfcCard', icon: CreditCard },
  { key: 'wallDisplay', icon: LayoutGrid },
] as const;

export default function Products() {
  const t = useTranslations('products');

  return (
    <section id="products" className="py-24 bg-black">
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
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-emerald-500/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(product.key)}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {t(product.key + 'Desc')}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
