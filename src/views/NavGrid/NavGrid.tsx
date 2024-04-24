// TODO: Rename to routes/add routing

import React, { useEffect, useRef, useState } from 'react';
import { GridContainer, ItemAuto } from '../../components/Grid';
//import Img from '../../assets/landscape.jpg';

import './index.scss';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import GridLink, { Props as GridLinkProps } from './GridLink';
import { Mode as HeaderMode } from 'src/components/Header';

/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */

// todo: add props with children
export type Props = {
  goToContent: any; //todo:
  setMode: React.Dispatch<React.SetStateAction<HeaderMode>>; // todo: Header could have generic type
  mode: HeaderMode;
  active: any;
  setActive: any;
};
function NavGrid({ goToContent, setMode, mode, active, setActive }: Props) {
  console.log('🚀 ~ NavGrid ~ mode:', mode);

  // todo: is there a reason to do this? Might be better to just target ::hover in css
  const [hovered, setHovered] = useState<GridLinkProps['type'] | null>(null);

  const navRef = useRef(null);
  const configContainerClasses = () => {
    let classes = [];
    if (hovered) {
      classes.push(`theme-${hovered}`);
    } else {
      classes.push('theme-primary');
    }

    if (mode === 'toTitle') {
      classes.push('to-title');
    }

    return classes.join(' ');
  };

  const resetDefaultState = () => {
    setHovered(null);
    setMode('full');
  };

  // todo: wire up to usr scroll top
  const reverse = (e: any) => {
    e.preventDefault();
    if (mode === 'toTitle' || mode === 'title') {
      setMode('full');
    }
  };

  const handleClick: GridLinkProps['onClick'] = (e, aArea) => {
    setActive(aArea); // set the active area
    if (mode === 'full') {
      setMode('toTitle'); // set header mode (link changes to header)
    }
  };

  function handleFinalCSSTransition(e: any) {
    if (e.animationName === 'fadeHideGrid') {
      setMode('title');
    }
  }

  return (
    <>
      <button onClick={resetDefaultState}>Default state</button>

      <button onClick={reverse}>Reverse</button>

      <nav
        className={classNames('nav-container', configContainerClasses())}
        ref={navRef}
        onAnimationEnd={handleFinalCSSTransition}>
        <GridContainer presetName='grid_3_3' extraClasses={['nav-list-container']}>
          <GridLink
            linkTo='home'
            type='primary'
            presetArea='a'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'a'}
            mode={mode}
          />

          <GridLink
            linkTo='projects'
            type='secondary'
            presetArea='b'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'b'}
            mode={mode}
          />
          <GridLink
            linkTo='page-3'
            type='tertiary'
            presetArea='c'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'c'}
            mode={mode}
          />
          <GridLink
            linkTo='page-4'
            type='primary'
            presetArea='d'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'd'}
            mode={mode}
          />
          <GridLink
            linkTo='page-5'
            type='secondary'
            presetArea='e'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'e'}
            mode={mode}
          />
          <GridLink
            linkTo='page-6'
            type='tertiary'
            presetArea='f'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'f'}
            mode={mode}
          />
        </GridContainer>
      </nav>
    </>
  );
}

// render alongside desktop/ route to on mobile

export default NavGrid;
