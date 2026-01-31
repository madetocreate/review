'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full blur-[100px] opacity-40 mix-blend-screen will-change-transform animate-blob" style={{ background: 'radial-gradient(circle, #064e3b 0%, transparent 70%)' }} />
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-[100px] opacity-30 mix-blend-screen will-change-transform animate-blob" style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)', animationDelay: '-7.5s' }} />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {t('badge')}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          {t('title').split('\n').map((line, i) => (<span key={i} className="block">{line}</span>))}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
          {t('subtitle')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#shop" className="px-8 py-4 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105">{t('cta')}</a>
          <a href="#how-it-works" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all">{t('ctaSecondary')}</a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
