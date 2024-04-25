import React from 'react';
import classNames from 'classnames';
import { ThemeNames } from 'src/types/types';
import { getThemeClass } from 'src/utils/getThemeClass';

import './index.scss';

export function Main({ theme, extraClasses = [''], children }: Props) {
  const themeClass = getThemeClass(theme);
  console.log('🚀 ~ Main ~ themeClass:', themeClass);
  return <main className={`main-view translate-up ${classNames(themeClass, extraClasses)}`}>{children}</main>;
}

type Props = {
  theme?: ThemeNames | null;
  extraClasses?: string[];
  children?: React.ReactNode;
};
