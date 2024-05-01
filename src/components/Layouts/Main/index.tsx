import React, { PropsWithChildren } from 'react';
import BreadCrumbs from 'src/components/Breadcrumbs';
import { useClasses } from 'src/hooks/useClasses';
import { ClassKeys } from '../types';
import { CLASSES } from '../consts';
import { ThemeNames } from 'src/types/types';
import { useTheme } from 'src/hooks/useTheme';

import './index.scss';

type Props = {
  theme: ThemeNames | null;
  type?: ClassKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

export function Main({ theme = 'a', type = 'primary', title, extraClasses = [], children }: PropsWithChildren<Props>) {
  const { className: themeClassName } = useTheme({ type: 'bg', initialValue: theme });

  const mainClasses = new Array(`${CLASSES[type]}-main`);

  const { classes } = useClasses({ containerClasses: [...mainClasses, themeClassName], extraClasses });

  return (
    <main className={`default ${classes}`}>
      <BreadCrumbs />
      {title && <h2>{title}</h2>}
      {children}
    </main>
  );
}
