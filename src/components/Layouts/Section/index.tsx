import React, { PropsWithChildren } from 'react';

import { Title } from 'src/components/Typography';

import { useClasses } from 'src/hooks/useClasses';

import { CompStyleTypeKeys, SectionChild } from 'src/types/types';

import { COMPONENT_STYLE_TYPES } from 'src/consts';

import './index.scss';

type Props = {
  type?: CompStyleTypeKeys;
  title?: string;
  tagline?: string;
  extraClasses?: string[];
  children?: SectionChild | SectionChild[];
};

/**
 *
 * @param
 * @returns
 */

function Section({ type = 'primary', title, tagline, extraClasses = [''], children }: PropsWithChildren<Props>) {
  const sectionClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-section`);

  const { classes } = useClasses({ containerClasses: sectionClasses, extraClasses });

  return (
    <section className={`default ${classes}`}>
      {title && <Title type='medium' text={title} tagline={tagline} extraClasses={['section-title']} />}
      {children}
    </section>
  );
}

export default Section;
