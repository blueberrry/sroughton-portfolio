import React, { PropsWithChildren } from 'react';

import { useClasses } from '../../../hooks/useClasses';

import Title from '../Title';
import { COMPONENT_STYLE_TYPES } from '../consts';
import { CompStyleTypeKeys } from '../../../types/types';

import './index.scss';

type Props = {
  type?: CompStyleTypeKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

function Section({ type = 'primary', title, extraClasses = [''], children }: PropsWithChildren<Props>) {
  const sectionClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-section`);

  const { classes } = useClasses({ containerClasses: sectionClasses, extraClasses });

  return (
    <section className={`default ${classes}`}>
      {title && <Title text={title} type='medium' />}
      {children}
    </section>
  );
}

export default Section;
