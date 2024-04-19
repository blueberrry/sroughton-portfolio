import React, { MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ItemAuto } from 'src/components/Grid';
import { ThemeNames } from 'src/types/types';

import './index.scss';
import { Mode } from './NavGrid';

const areaTransitionDelays = {
  a: '250ms',
  b: '500ms',
  c: '750ms',
  d: '1000ms',
  e: '1250ms',
  f: '1500ms',
};

function GridLink({ linkTo, type, presetArea, setHoveredItem, onClick, isActive, mode }: Props) {
  const [containerClasses, setContainerClasses] = useState('');

  useEffect(() => {
    if (!mode) {
      setContainerClasses('');
    }

    if (mode === 'header') {
      if (isActive) {
        // containerClasses = isActive ? 'show' : '';
        // todo: add transitioning classes to active
        setContainerClasses('active-transition-out');
      }
      if (!isActive) {
        // todo: reverse
        // const areas = ['a', 'b', 'c', 'd', 'e', 'f'];

        const classes = `header transitioning-out-${areaTransitionDelays[presetArea]}`;
        setContainerClasses(classes);
      }
    }

    if (mode === 'full') {
      if (isActive) {
        setContainerClasses('active-transition-in');
      }
      if (!isActive) {
        const classes = `full transitioning-in-${areaTransitionDelays[presetArea]}`;
        setContainerClasses(classes);
      }
    }

    return () => {
      // clean up logic here if needed
    };
  }, [mode, isActive, setContainerClasses]);

  return (
    <ItemAuto
      type={type}
      extraClasses={[`area-${presetArea} ${isActive ? 'active' : ''} ${containerClasses}`]}
      onHover={(name) => name && setHoveredItem(name)}>
      <NavLink
        to={linkTo}
        onClick={(e) => onClick(e, presetArea)}
        className={() => {
          // { isActive, isPending, isTransitioning }
          // if (isActive) {
          //   // scroll
          //   goToContent();
          // }
          return [
            'grid-link-content',
            // isPending ? 'pending' : '', // todo: unused
            // isActive ? 'active' : 'inactive', // if active class, start animation
            // isTransitioning ? 'transitioning' : '',
          ].join(' ');
        }}>
        {linkTo}
      </NavLink>
    </ItemAuto>
  );
}

export default GridLink;

export type Props = {
  linkTo: '/' | 'home' | 'projects' | 'page-3' | 'page-4' | 'page-5' | 'page-6';
  type: ThemeNames; // style type
  presetArea: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'; // preset areas defined in GridContainer
  setHoveredItem: React.Dispatch<React.SetStateAction<Props['type']>>;
  onClick: (e: MouseEvent<HTMLAnchorElement>, aArea: Props['presetArea']) => void;
  isActive: boolean;
  mode: Mode;
};
