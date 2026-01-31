'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialKeys = ['t1', 't2', 't3'] as const;

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{t('title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-200"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t(key + 'Text')}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t(key + 'Name')}</p>
                <p className="text-gray-400 text-sm">{t(key + 'Role')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
