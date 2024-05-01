import React, { PropsWithChildren } from 'react';

import { useClasses } from 'src/hooks/useClasses';

import { CLASSES } from '../consts';
import { ClassKeys } from '../types';

import './index.scss';

type Props = {
  type?: ClassKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

export function Section({ type = 'default', title, extraClasses = [''], children }: PropsWithChildren<Props>) {
  const sectionClasses = new Array(`${CLASSES[type]}-section`);

  const { classes } = useClasses({ containerClasses: sectionClasses, extraClasses });

  return (
    <section className={classes}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}

export default Section;
