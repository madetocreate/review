'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-2xl mx-auto px-6">
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
          className="text-white/60 text-center mb-12"
        >
          {t('description')}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm text-white/60 mb-2">{t('name')}</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder={t('name')}
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">{t('email')}</label>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder={t('email')}
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">{t('subject')}</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
              placeholder={t('subject')}
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">{t('message')}</label>
            <textarea
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
              placeholder={t('message')}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-black font-semibold py-3 rounded-xl hover:bg-emerald-400 transition-colors duration-300"
          >
            {t('send')}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
