'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const legalLinks = ['imprint', 'privacy', 'terms', 'revocation'] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-2xl font-bold text-white">
            REVIEW<span className="text-emerald-400">+</span>FILTER
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((key) => (
              <a
                key={key}
                href={'#' + key}
                className="text-sm text-white/40 hover:text-emerald-400 transition-colors duration-300"
              >
                {t(key)}
              </a>
            ))}
          </div>

          <p className="text-sm text-white/30">
            {t('copyright', { year: String(year) })}
          </p>

          <p className="text-xs text-white/20 max-w-lg text-center">
            {t('disclaimer')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
