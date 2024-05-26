import React, { PropsWithChildren } from 'react';

import { Title } from '../../Typography/index';
import { useClasses } from '../../../hooks';

import { COMPONENT_STYLE_TYPES } from '../consts';
import { ArticleChild, CompStyleTypeKeys } from '../../../types/types';

import './index.scss';

type Props = {
  id?: string;
  type?: CompStyleTypeKeys;
  title?: string;
  tagline?: string;
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

function Article({
  id,
  type = 'primary',
  title,
  tagline,
  date,
  tags,
  extraClasses = [''],
  children,
}: PropsWithChildren<Props>) {
  const articleClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-article`);

  const { classes } = useClasses({ containerClasses: articleClasses, extraClasses });

  return (
    <article className={`default ${classes}`}>
      {title && <Title text={title} tagline={tagline} type='sub' extraClasses={['article-title']} />}
      {children}
    </article>
  );
}

export default Article;
