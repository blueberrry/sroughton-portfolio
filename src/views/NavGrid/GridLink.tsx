import React, { MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ItemAuto } from 'src/components/Grid';

import './index.scss';
import { Mode as HeaderMode } from '../../App';

const CSS_TRANSITION_DELAYS = {
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
        setContainerClasses(['item-active', 'item-disabled', 'active-transition-out']);
      }
      if (!isActive) {
        setContainerClasses(['item-disabled', `transitioning-out-${CSS_TRANSITION_DELAYS[presetArea]}`]);
      }
    }

    if (mode === 'full') {
      if (isActive) {
        setContainerClasses(['item-active', 'active-transition-in']);
      }
      if (!isActive) {
        setContainerClasses((prev) => [...prev, `transitioning-in-${CSS_TRANSITION_DELAYS[presetArea]}`]);
      }
    }

    return () => {
      // clean up logic here if needed
    };
  }, [mode, isActive, setContainerClasses]);

  return (
    <ItemAuto
      theme={presetArea}
      extraClasses={[`area-${presetArea} ${containerClasses.join(' ')}`]}
      onHover={(name) => name && setHoveredItem(name)}>
      <NavLink
        to={linkTo}
        onClick={(e) => onClick(e, presetArea)}
        className={() => {
          // { isActive, isPending, isTransitioning }
          return ['nav-link-content'].join(' ');
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
