'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Monitor, CreditCard, LayoutGrid } from 'lucide-react';
import Image from 'next/image';

const products = [
  { key: 'tableDisplay', icon: Monitor },
  { key: 'nfcCard', icon: CreditCard },
  { key: 'wallDisplay', icon: LayoutGrid },
] as const;

export default function Products() {
  const t = useTranslations('products');

  return (
    <section id="products" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              {t('label')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {t('title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg mb-10 leading-relaxed"
            >
              {t('description')}
            </motion.p>
            <div className="space-y-4">
              {products.map((product, i) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t(product.key)}</h3>
                      <p className="text-sm text-gray-500">{t(product.key + 'Desc')}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden"
          >
            <Image
              src="/product-flatlay.png"
              alt="Review Filter products"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
