'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

const locales = [
  { code: 'de' as const, flag: '🇩🇪' },
  { code: 'en' as const, flag: '🇬🇧' },
  { code: 'es' as const, flag: '🇪🇸' },
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
          className={
            'text-lg leading-none px-1 py-0.5 rounded transition-opacity ' +
            (locale === l.code ? 'opacity-100' : 'opacity-40 hover:opacity-80')
          }
          aria-label={l.code}
        >
          {l.flag}
        </button>
      ))}
    </div>
  );
}
