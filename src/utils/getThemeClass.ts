import { ThemeNames } from 'src/types/types';

export function getThemeClass(theme: ThemeNames | null | undefined, defaultTheme = 'theme-primary') {
  if (!theme) {
    return defaultTheme;
  }
  return `theme-${theme}`;
}
