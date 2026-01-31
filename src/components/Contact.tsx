'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-500 text-lg">{t('description')}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
              placeholder={t('name')}
            />
            <input
              type="email"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
              placeholder={t('email')}
            />
          </div>
          <input
            type="text"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
            placeholder={t('subject')}
          />
          <textarea
            rows={5}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none"
            placeholder={t('message')}
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-3.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            {t('send')}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
