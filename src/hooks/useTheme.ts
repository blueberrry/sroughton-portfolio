import React, { useState } from 'react';
import { ThemeNames } from 'src/types/types';
import { getThemeClass } from 'src/utils/getThemeClass';

export type Returns = {
  activeTheme: ThemeNames | null;
  setActiveTheme: React.Dispatch<React.SetStateAction<Returns['activeTheme']>>;
  className: string;
};
export function useTheme(): Returns {
  const [activeTheme, setActiveTheme] = useState<ThemeNames | null>(null);

  const className = getThemeClass(activeTheme);

  return { activeTheme, setActiveTheme, className };
}
