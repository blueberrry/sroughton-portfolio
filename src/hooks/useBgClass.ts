import React, { useState } from 'react';
import { AreaNames, BgStates } from 'src/types/types';
import { getBgClass } from '../utils/getBgClass';

export type Returns = {
  activeArea: AreaNames | null;
  setActiveArea: React.Dispatch<React.SetStateAction<Returns['activeArea']>>;
  className: string;
};

type UseThemeArgs = {
  bgType: BgStates;
  initialValue?: AreaNames | null;
};

// theme types can be bg color, bg img, bg gradient
// could even have types like secondary-bg for something like a complementing colour
// would be good to configure so that we can only use relevant styled types in component
// eg - Main only has bg colour and secondary bg colour styled so restrict it to these types

export function useBgClass({ bgType = 'bg', initialValue }: UseThemeArgs): Returns {
  const [activeArea, setActiveArea] = useState<AreaNames | null>(initialValue ?? null);

  const className = getBgClass(bgType, activeArea);

  return { activeArea, setActiveArea, className };
}
