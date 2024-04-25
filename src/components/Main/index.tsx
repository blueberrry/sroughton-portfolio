import React from 'react';
import classNames from 'classnames';
import './index.scss';
import { ThemeNames } from 'src/types/types';
import { getThemeClass } from 'src/utils/getThemeClass';

export function Main({ theme, extraClasses = [''], children }: Props) {
  const themeClass = getThemeClass(theme);
  console.log('🚀 ~ Main ~ themeClass:', themeClass);
  return <main className={`main-view ${classNames(themeClass, extraClasses)}`}>{children}</main>;
}

type Props = {
  theme?: ThemeNames | null;
  extraClasses?: string[];
  children?: React.ReactNode;
};
