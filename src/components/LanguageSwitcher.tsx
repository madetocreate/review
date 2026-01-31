'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

const locales = [
  { code: 'de' as const, label: 'DE' },
  { code: 'en' as const, label: 'EN' },
  { code: 'es' as const, label: 'ES' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex gap-1">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => router.replace(pathname, { locale: l.code })}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            locale === l.code
              ? 'bg-accent text-black'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
