import React, { PropsWithChildren } from 'react';

import './index.scss';

import BreadCrumbs from 'src/components/Breadcrumbs';
import { useClasses } from 'src/hooks/useClasses';
import { ClassKeys } from '../types';
import { CLASSES } from '../consts';

type Props = {
  type?: ClassKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

export function Main({ type = 'default', title, extraClasses = [''], children }: PropsWithChildren<Props>) {
  const mainClasses = new Array(`${CLASSES[type]}-main`);

  const { classes } = useClasses({ containerClasses: mainClasses, extraClasses });
  return (
    <main className={classes}>
      <BreadCrumbs />
      {title && <h2>{title}</h2>}
      {children}
    </main>
  );
}
