import React from 'react';
import classNames from 'classnames';
import './index.scss';
import { ThemeNames } from 'src/types/types';

export function Main({ type, extraClasses = [''], children }: Props) {
  let themeClass = '';
  if (!type) {
    themeClass = `theme-default`;
  } else {
    themeClass = `theme-${type}`;
  }
  return <main className={`main-view ${classNames(themeClass, extraClasses)}`}>{children}</main>;
}

type Props = {
  type?: ThemeNames;
  extraClasses?: string[];
  children?: React.ReactNode;
};
