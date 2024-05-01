import React, { PropsWithChildren } from 'react';
import BreadCrumbs from '../Breadcrumbs';
import './index.scss';
import { LAYOUT_TYPES, LayoutType } from './Layouts';

type Props = {
  type?: LayoutType;
  title?: string;
};

export function Section({ type = 'mainSection', title, children }: PropsWithChildren<Props>) {
  if (!LAYOUT_TYPES.includes(type)) {
    return (
      <section className={`layout default`}>
        <BreadCrumbs />
        {title && <h1>{title}</h1>}
        {children}
      </section>
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

export default Section;
