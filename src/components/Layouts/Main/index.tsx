import React, { PropsWithChildren } from 'react';
import { BreadCrumbs } from 'src/components/Breadcrumbs';
import { useClasses } from 'src/hooks/useClasses';
import { CompStyleTypeKeys } from '../../../types/types';
import { COMPONENT_STYLE_TYPES } from '../consts';
import { AreaNames } from 'src/types/types';
import { useBgClass } from 'src/hooks/useBgClass';

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
  console.log('🚀 ~ Main ~ location:', location);
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log('🚀 ~ Main ~ pathnames:', pathnames);

  const { className: bgClassName } = useBgClass({ bgType: 'bg', initialValue: active });

  const mainClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-main`); // todo: create hook?

  const { classes } = useClasses({ containerClasses: [...mainClasses, bgClassName], extraClasses });

  return (
    <main className={`default ${classes}`}>
      <BreadCrumbs pathnames={pathnames} root={'home'} />
      {title && <h2>{title}</h2>}
      {children}
    </main>
  );
}

export default Main;
