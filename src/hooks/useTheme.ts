import React, { useState } from 'react';
import { ThemeNames } from 'src/types/types';
import { getThemeClass } from 'src/utils/getThemeClass';

export type Returns = {
  theme: ThemeNames | null;
  setTheme: React.Dispatch<React.SetStateAction<Returns['theme']>>;
  className: string;
};
export function useTheme(): Returns {
  const [theme, setTheme] = useState<ThemeNames | null>(null);

  const className = getThemeClass(theme);

  return { theme, setTheme, className };
}
