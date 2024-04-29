import { ThemeNames } from 'src/types/types';

export function getThemeClass(type = 'bg', theme: ThemeNames | null | undefined, defaultTheme = 'theme-bg-a') {
  if (!theme) {
    return defaultTheme;
  }
  return `theme-${type}-${theme}`;
}
