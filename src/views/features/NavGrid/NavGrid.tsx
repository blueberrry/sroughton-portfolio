import React, { useRef } from 'react';
import { GridContainer } from '../../../components/Grid';

import classNames from 'classnames';
import GridLink, { Props as GridLinkProps } from './GridLink';
import { Mode as HeaderMode } from 'src/App';
import { Returns as UseBgClassReturns } from 'src/hooks/useBgClass';

import './index.scss';
/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */

export type Props = {
  mode: HeaderMode;
  setMode: React.Dispatch<React.SetStateAction<HeaderMode>>; // todo: Header could have generic type
  bgClassName: any;
  activeArea: UseBgClassReturns['activeArea'];
  setActiveArea: UseBgClassReturns['setActiveArea'];
};
function NavGrid({ mode, setMode, bgClassName, activeArea, setActiveArea }: Props) {
  const navRef = useRef(null);

  // todo: memoise?
  const configContainerClasses = () => {
    let classes = [bgClassName];

    if (mode === 'toTitle') {
      classes.push('to-title');
    } // todo is this class used?

    return classes.join(' ');
  };

  const resetDefaultState = () => {
    setActiveArea(null);
    setMode('full');
  };

  const handleClick: GridLinkProps['onClick'] = (e, aArea) => {
    if (setActiveArea) {
      setActiveArea(aArea); // set the active area
    }
    if (mode === 'full') {
      setMode('toTitle'); // set header mode (link changes to header)
    }
  };

  const handleFinalCSSTransition = (e: any) => {
    if (e.animationName === 'fadeHideGrid') {
      setMode('title');
    }
  };

  return (
    <>
      <nav
        className={classNames('nav-container', configContainerClasses())}
        ref={navRef}
        onAnimationEnd={handleFinalCSSTransition}>
        <h3> Grid Nav </h3>
        <GridContainer presetName='grid_3_3' extraClasses={['nav-list-container']}>
          <GridLink
            linkTo='home'
            presetArea='a'
            setTheme={setActiveArea}
            onClick={handleClick}
            isActive={activeArea === 'a'}
            mode={mode}
          />

          <GridLink
            linkTo='projects'
            presetArea='b'
            setTheme={setActiveArea}
            onClick={handleClick}
            isActive={activeArea === 'b'}
            mode={mode}
          />
          <GridLink
            linkTo='page-3'
            presetArea='c'
            setTheme={setActiveArea}
            onClick={handleClick}
            isActive={activeArea === 'c'}
            mode={mode}
          />
          <GridLink
            linkTo='page-4'
            presetArea='d'
            setTheme={setActiveArea}
            onClick={handleClick}
            isActive={activeArea === 'd'}
            mode={mode}
          />
          <GridLink
            linkTo='page-5'
            presetArea='e'
            setTheme={setActiveArea}
            onClick={handleClick}
            isActive={activeArea === 'e'}
            mode={mode}
          />
          <GridLink
            linkTo='page-6'
            presetArea='f'
            setTheme={setActiveArea}
            onClick={handleClick}
            isActive={activeArea === 'f'}
            mode={mode}
          />
        </GridContainer>
      </nav>
    </>
  );
}

export default NavGrid;
