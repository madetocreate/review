'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const t = useTranslations('comparison');

  const rows = ['row1', 'row2', 'row3', 'row4', 'row5'] as const;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-5 text-sm font-semibold text-gray-400 uppercase tracking-wider">{t('feature')}</div>
            <div className="p-5 text-sm font-semibold text-gray-400 uppercase tracking-wider text-center">{t('without')}</div>
            <div className="p-5 text-sm font-semibold text-gray-900 uppercase tracking-wider text-center bg-accent/5">{t('with')}</div>
          </div>
          {rows.map((row, i) => (
            <div key={row} className={'grid grid-cols-3 ' + (i < rows.length - 1 ? 'border-b border-gray-100' : '')}>
              <div className="p-5 text-gray-700 font-medium text-sm">{t(row)}</div>
              <div className="p-5 flex justify-center">
                <X className="w-5 h-5 text-gray-300" />
              </div>
              <div className="p-5 flex justify-center bg-accent/5">
                <Check className="w-5 h-5 text-accent" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
