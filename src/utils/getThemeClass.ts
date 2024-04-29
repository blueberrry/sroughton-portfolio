import { ThemeNames } from 'src/types/types';

export function getThemeClass(theme: ThemeNames | null | undefined, type = 'bg', defaultTheme = 'theme-bg-primary') {
  if (!theme) {
    return defaultTheme;
  }
  return `theme-${type}-${theme}`;
}
