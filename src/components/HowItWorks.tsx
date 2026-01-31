'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { QrCode, Filter, Star } from 'lucide-react';
import Image from 'next/image';

const steps = [
  { key: 'step1', icon: QrCode },
  { key: 'step2', icon: Filter },
  { key: 'step3', icon: Star },
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/hero-customers.png"
                alt="Happy customers scanning QR code"
                width={1792}
                height={1024}
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
            </div>
          </motion.div>

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

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{t(step.key + 'Title')}</h3>
                      <p className="text-gray-500 leading-relaxed">{t(step.key + 'Desc')}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
