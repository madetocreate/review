'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'benefits', href: '#benefits' },
  { key: 'showcase', href: '#showcase' },
  { key: 'shop', href: '#shop' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : '')
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-gray-900">
          review<span className="text-accent">filter</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={'w-6 h-0.5 bg-gray-900 transition-transform ' + (mobileOpen ? 'rotate-45 translate-y-2' : '')} />
          <span className={'w-6 h-0.5 bg-gray-900 transition-opacity ' + (mobileOpen ? 'opacity-0' : '')} />
          <span className={'w-6 h-0.5 bg-gray-900 transition-transform ' + (mobileOpen ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-6"
        >
          {navItems.map((item) => (
            <a key={item.key} href={item.href} onClick={() => setMobileOpen(false)} className="text-lg text-gray-700 hover:text-gray-900">
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </motion.div>
      )}
    </motion.nav>
  );
}
