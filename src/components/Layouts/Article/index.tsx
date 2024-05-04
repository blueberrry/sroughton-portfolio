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

export function Article({ type = 'primary', title, extraClasses = [''], children }: PropsWithChildren<Props>) {
  const articleClasses = new Array(`${CLASSES[type]}-article`);

  const { classes } = useClasses({ containerClasses: articleClasses, extraClasses });

  return (
    <article className={`default ${classes}`}>
      {title && <h3>{title}</h3>}
      {children}
    </article>
  );
}

export default Article;
