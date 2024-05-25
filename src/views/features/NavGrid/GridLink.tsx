import React, { MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ItemAuto } from 'src/components';

import { HeaderSwitcherMode } from 'src/types/types';
import { CSS_TRANSITION_DELAYS } from 'src/consts';

import './index.scss';

export type Props = {
  linkTo: '/' | 'home' | 'projects' | 'page-3' | 'page-4' | 'page-5' | 'page-6';
  presetArea: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'; // preset areas defined in GridContainer
  setTheme: React.Dispatch<React.SetStateAction<Props['presetArea']>>;
  onClick: (e: MouseEvent<HTMLAnchorElement>, aArea: Props['presetArea']) => void;
  isActive: boolean;
  mode: HeaderSwitcherMode;
};

function GridLink({ linkTo, presetArea, setTheme, onClick, isActive, mode }: Props) {
  const [containerClasses, setContainerClasses] = useState(['full']);

  useEffect(() => {
    if (!mode) {
      setContainerClasses([]);
    }

    if (mode === 'full') {
      if (isActive) {
        setContainerClasses(['item-active', 'active-transition-in']);
      }
      if (!isActive) {
        setContainerClasses((prev) => [
          // todo: fix this mess
          ...prev.filter((p) => p !== 'item-active'),
          `transitioning-in-${CSS_TRANSITION_DELAYS[presetArea]}`,
        ]);
      }
    }

    if (mode === 'toTitle') {
      if (isActive) {
        setContainerClasses(['item-active', 'item-disabled', 'active-transition-out']);
      }
      if (!isActive) {
        setContainerClasses(['item-disabled', `transitioning-out-${CSS_TRANSITION_DELAYS[presetArea]}`]);
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
      onHover={(name) => name && setTheme(name)}>
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
