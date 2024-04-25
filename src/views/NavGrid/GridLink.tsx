import React, { MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ItemAuto } from 'src/components/Grid';

import './index.scss';
import { Mode as HeaderMode } from '../../components/Header';

const areaTransitionDelays = {
  a: '250ms',
  b: '500ms',
  c: '750ms',
  d: '1000ms',
  e: '1250ms',
  f: '1500ms',
};

function GridLink({ linkTo, presetArea, setHoveredItem, onClick, isActive, mode }: Props) {
  const [containerClasses, setContainerClasses] = useState(['full']);

  useEffect(() => {
    if (!mode) {
      setContainerClasses([]);
    }

    if (mode === 'toTitle') {
      if (isActive) {
        // containerClasses = isActive ? 'show' : '';
        setContainerClasses(['active-transition-out']);
      }
      if (!isActive) {
        // const areas = ['a', 'b', 'c', 'd', 'e', 'f'];

        setContainerClasses([`transitioning-out-${areaTransitionDelays[presetArea]}`]);
      }
    }

    if (mode === 'full') {
      //setContainerClasses(['full']);
      if (isActive) {
        setContainerClasses(['active-transition-in']);
      }
      if (!isActive) {
        setContainerClasses((prev) => [...prev, `transitioning-in-${areaTransitionDelays[presetArea]}`]);
      }
    }

    return () => {
      // clean up logic here if needed
    };
  }, [mode, isActive, setContainerClasses]);

  return (
    <ItemAuto
      theme={presetArea}
      extraClasses={[`area-${presetArea} ${isActive ? 'active' : ''} ${containerClasses.join(' ')}`]}
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
            'nav-link-content',
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
  presetArea: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'; // preset areas defined in GridContainer
  setHoveredItem: React.Dispatch<React.SetStateAction<Props['presetArea']>>;
  onClick: (e: MouseEvent<HTMLAnchorElement>, aArea: Props['presetArea']) => void;
  isActive: boolean;
  mode: HeaderMode;
};
