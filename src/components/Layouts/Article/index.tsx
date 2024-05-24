import React, { PropsWithChildren } from 'react';

import { Title } from '../../Typography/index';
import { useClasses } from '../../../hooks/useClasses';

import { COMPONENT_STYLE_TYPES } from '../consts';
import { ArticleChild, CompStyleTypeKeys } from '../../../types/types';

import './index.scss';

type Props = {
  id?: string;
  type?: CompStyleTypeKeys;
  title?: string;
  subTitle?: string;
  date?: Date | number; //todo Date type
  tags?: string[]; // todo: relative links?
  extraClasses?: string[];
  children?: ArticleChild | ArticleChild[];
};

/**
 *
 * * Article component renders a single article at a time
 * @param
 * @returns
 */

function Article({ id, type = 'primary', title, date, tags, extraClasses = [''], children }: PropsWithChildren<Props>) {
  console.log('🚀 ~ Article ~ tags:', tags);
  console.log('🚀 ~ Article ~ date:', date);
  console.log('🚀 ~ Article ~ id:', id);
  const articleClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-article`);

  const { classes } = useClasses({ containerClasses: articleClasses, extraClasses });

  return (
    <article className={`default ${classes}`}>
      {title && <Title text={title} type='sub' extraClasses={['article-title']} />}
      {children}
    </article>
  );
}

export default Article;
