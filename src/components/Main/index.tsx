import React from 'react';
import classNames from 'classnames';
import { ThemeNames } from 'src/types/types';

import './index.scss';

export function Main({ extraClasses = [''], children }: Props) {
  return <main className={`main-view translate-up ${classNames(extraClasses)}`}>{children}</main>;
}

type Props = {
  theme?: ThemeNames | null;
  extraClasses?: string[];
  children?: React.ReactNode;
};
