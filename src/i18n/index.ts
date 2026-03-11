import { en } from './en';
import { fr } from './fr';

export type Lang = 'en' | 'fr';
export type { Translations } from './en';

export function useTranslations(lang: Lang) {
  return lang === 'fr' ? fr : en;
}
