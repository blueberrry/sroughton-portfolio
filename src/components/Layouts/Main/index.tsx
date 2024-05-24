import React, { PropsWithChildren } from 'react';
import { BreadCrumbs } from 'src/components/Breadcrumbs';
import { Title } from 'src/components/Typography';

import { useClasses } from 'src/hooks/useClasses';
import { useBgClass } from 'src/hooks/useBgClass';

import { CompStyleTypeKeys } from '../../../types/types';
import { AreaNames } from 'src/types/types';

import { COMPONENT_STYLE_TYPES } from '../consts';

import './index.scss';
import { useLocation } from 'react-router-dom';

type Props = {
  active: AreaNames | null;
  type?: CompStyleTypeKeys;
  title?: string;
  extraClasses?: string[];
  children?: React.ReactNode;
};

function Main({ active = 'a', type = 'primary', title, extraClasses = [], children }: PropsWithChildren<Props>) {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const { className: bgClassName } = useBgClass({ bgType: 'bg', initialValue: active });

  const mainClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-main`); // todo: create hook?

  const { classes } = useClasses({ containerClasses: [...mainClasses, bgClassName], extraClasses });

  return (
    <main className={`default ${classes}`}>
      <BreadCrumbs pathnames={pathnames} root={'home'} />
      {title && <Title type='main' text={title} />}
      {children}
    </main>
  );
}

export default Main;
