import React, { PropsWithChildren } from 'react';
import BreadCrumbs from '../Breadcrumbs';
import Section from './Section';

import './index.scss';

export type LayoutType = 'mainSection' | 'secondary';

export const LAYOUT_TYPES: LayoutType[] = [{ name: 'mainSection', class: 'main-section' }, { name: 'secondary', class: 'secondary' }];

type Props = {
  type?: LayoutType;
  title?: string;
};

export function Layouts({ type = 'mainSection', title, children }: PropsWithChildren<Props>) {
  if (type === 'mainSection') {
    return (
      <Section title={title} type='main-container'>
        {children}
      </Section>
    );
  }

  return (
    <section className={`layout ${type}`}>
      <BreadCrumbs />
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
}

export default Layouts;
