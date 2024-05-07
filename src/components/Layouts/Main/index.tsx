import React, { PropsWithChildren } from 'react';
import BreadCrumbs from 'src/components/Breadcrumbs';
import { useClasses } from 'src/hooks/useClasses';
import { ClassKeys } from '../types';
import { CLASSES } from '../consts';
import { AreaNames } from 'src/types/types';
import { useBgClass } from 'src/hooks/useBgClass';

import './index.scss';

type Props = {
  active: AreaNames | null;
  type?: ClassKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

export function Main({ active = 'a', type = 'primary', title, extraClasses = [], children }: PropsWithChildren<Props>) {
  const { className: bgClassName } = useBgClass({ type: 'bg', initialValue: active });

  const mainClasses = new Array(`${CLASSES[type]}-main`);

  const { classes } = useClasses({ containerClasses: [...mainClasses, bgClassName], extraClasses });

  return (
    <main className={`default ${classes}`}>
      <BreadCrumbs />
      {title && <h2>{title}</h2>}
      {children}
    </main>
  );
}
