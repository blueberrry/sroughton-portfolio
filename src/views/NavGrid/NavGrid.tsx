// TODO: Rename to routes/add routing

import React, { useEffect, useState } from 'react';
import { GridContainer, ItemAuto } from '../../components/Grid';
//import Img from '../../assets/landscape.jpg';

import './index.scss';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import GridLink, { Props as GridLinkProps } from './GridLink';

/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */
// todo: add routing
// todo: go to route on click
// todo: fade animations
// todo: nested route links   home > projects   home > gpt etc
// todo: replace NavGrid with header onClick?

function NavGrid({ goToContent }: any) {
  const [mode, setMode] = useState<Mode>('full');

  const [hovered, setHovered] = useState<GridLinkProps['type'] | null>(null);
  const [active, setActive] = useState<GridLinkProps['presetArea'] | null>(null);

  const containerBgClass = hovered ? `theme-${hovered}` : 'theme-primary';

  const resetDefaultState = () => {
    setHovered(null);
    // setActive(null); -- only do this if initial page
    setMode('full');
  };

  const handleClick: GridLinkProps['onClick'] = (e, aArea) => {
    if (mode === 'full') {
      setMode('transitioning');
      setActive(aArea);
    } else {
      return;
    }
  };

  return (
    <>
      <button onClick={resetDefaultState}>Default state</button>
      <nav className={classNames('nav-container', containerBgClass)}>
        <GridContainer presetName={'button'}>
          <GridLink
            linkTo='home'
            type='primary'
            presetArea='a'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'a'}
            isTransitioning={mode === 'transitioning'}
          />
          <GridLink
            linkTo='projects'
            type='secondary'
            presetArea='b'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'b'}
            isTransitioning={mode === 'transitioning'}
          />
          <GridLink
            linkTo='page-3'
            type='tertiary'
            presetArea='c'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'c'}
            isTransitioning={mode === 'transitioning'}
          />
          <GridLink
            linkTo='page-4'
            type='primary'
            presetArea='d'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'd'}
            isTransitioning={mode === 'transitioning'}
          />
          <GridLink
            linkTo='page-5'
            type='secondary'
            presetArea='e'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'e'}
            isTransitioning={mode === 'transitioning'}
          />
          <GridLink
            linkTo='page-6'
            type='tertiary'
            presetArea='f'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={active === 'f'}
            isTransitioning={mode === 'transitioning'}
          />
        </GridContainer>
      </nav>
    </>
  );
}

// render alongside desktop/ route to on mobile

export default NavGrid;

type Mode = 'full' | 'transitioning' | 'header';
