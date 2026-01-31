'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = ['/hero-customers.png', '/product-flatlay.png', '/cafe-interior.png'];

export default function StickyShowcase() {
  const t = useTranslations('showcase');
  const tHow = useTranslations('howItWorks');

  const cards = [
    { key: 'step1', top: 100, img: images[0] },
    { key: 'step2', top: 130, img: images[1] },
    { key: 'step3', top: 160, img: images[2] },
  ];

  return (
    <section id="showcase" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t('label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('description')}</p>
        </motion.div>
      </div>

      <div className="relative px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-6 pt-16">
          {cards.map((card, i) => (
            <div key={card.key} className="sticky" style={{ top: card.top }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 md:h-[340px]">
                  <div className="p-10 md:p-12 flex flex-col justify-center">
                    <span className="text-accent text-sm font-bold mb-3">{'0' + (i + 1)}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{tHow(card.key + 'Title')}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{tHow(card.key + 'Desc')}</p>
                  </div>
                  <div className="aspect-[4/3] md:aspect-auto">
                    <Image
                      src={card.img}
                      alt={tHow(card.key + 'Title')}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
