import { useState } from 'react';
import { ThemeNames } from 'src/types/types';
import { getThemeClass } from 'src/utils/getThemeClass';

export function useTheme() {
  const [active, setActive] = useState<ThemeNames | null>(null);

  const className = getThemeClass(active);

  return { activeTheme: active, setActiveTheme: setActive, className };
}
