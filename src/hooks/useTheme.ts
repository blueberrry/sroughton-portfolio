import React, { useState } from 'react';
import { ThemeNames } from 'src/types/types';
import { getThemeClass } from 'src/utils/getThemeClass';

export type Returns = {
  theme: ThemeNames | null;
  setTheme: React.Dispatch<React.SetStateAction<Returns['theme']>>;
  className: string;
};

type UseThemeArgs = {
  type: any; //todo
  initialValue?: ThemeNames | null;
};

// theme types can be bg color, bg img, bg gradient
// could even have types like secondary-bg for something like a complementing colour
// would be good to configure so that we can only use relevant styled types in component
// eg - Main only has bg colour and secondary bg colour styled so restrict it to these types

export function useTheme({ type = 'bg', initialValue }: UseThemeArgs): Returns {
  const [theme, setTheme] = useState<ThemeNames | null>(initialValue ?? null);

  const className = getThemeClass(type, theme);

  return { theme, setTheme, className };
}
