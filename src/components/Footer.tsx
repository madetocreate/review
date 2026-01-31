'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const legalLinks = ['imprint', 'privacy', 'terms', 'revocation'] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-2xl font-bold text-white">
            review<span className="text-accent">+</span>filter
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((key) => (
              <a
                key={key}
                href={'#' + key}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-300">
            {t('copyright', { year: String(year) })}
          </p>

          <p className="text-xs text-gray-400 max-w-lg text-center">
            {t('disclaimer')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
