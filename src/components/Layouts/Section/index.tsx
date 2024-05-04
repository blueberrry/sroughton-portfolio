import React, { PropsWithChildren } from 'react';

import { useClasses } from 'src/hooks/useClasses';

import { Title } from '../Title';
import { CLASSES } from '../consts';
import { ClassKeys } from '../types';

import './index.scss';

type Props = {
  type?: ClassKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

export function Section({ type = 'primary', title, extraClasses = [''], children }: PropsWithChildren<Props>) {
  const sectionClasses = new Array(`${CLASSES[type]}-section`);

  const { classes } = useClasses({ containerClasses: sectionClasses, extraClasses });

  return (
    <section className={`default ${classes}`}>
      {title && <Title text={title} type='medium' />}
      {children}
    </section>
  );
}

export default Section;
