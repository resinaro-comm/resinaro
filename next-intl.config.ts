// next-intl.config.ts
export default {
  locales: ['en', 'it'],
  defaultLocale: 'en',
  // Force locale prefix on every route so /directory/... never resolves without it
  localePrefix: 'always' as const
};
