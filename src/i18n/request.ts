// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "../i18n";

export default getRequestConfig(async ({ locale }) => {
  const active: string =
    typeof locale === "string" && (locales as readonly string[]).includes(locale)
      ? locale
      : defaultLocale;

  // Messages live at src/messages/*.json
  const messages = (await import(`../messages/${active}.json`)).default;

  return {
    locale: active,
    messages,
  };
});
