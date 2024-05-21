import React, { PropsWithChildren } from 'react';

import { useClasses } from '../../../hooks/useClasses';

import { COMPONENT_STYLE_TYPES } from '../consts';
import { CompStyleTypeKeys } from '../../../types/types';

import './index.scss';

/**
 * * Article component renders a single article at a time
 *   todo: article page will be different as it will render search/article explorer etc
 */

type Props = {
  id?: string;
  type?: CompStyleTypeKeys;
  title?: string;
  subTitle?: string;
  //sections: [{ title: ''; images: []; paragraphs: [] }];
  //images: [{ href: ''; alt: '' }, { href: ''; alt: '' }];
  date?: Date;
  tags?: string[]; // todo: relative links?
  extraClasses?: string[];
  children?: React.ReactNode;
};

function Article({ id, type = 'primary', title, date, tags, extraClasses = [''], children }: PropsWithChildren<Props>) {
  console.log('🚀 ~ Article ~ id:', id);
  const articleClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-article`);

  const { classes } = useClasses({ containerClasses: articleClasses, extraClasses });

  return (
    <article className={`default ${classes}`}>
      {title && <h3>{title}</h3>}
      {children}
    </article>
  );
}

export default Article;
