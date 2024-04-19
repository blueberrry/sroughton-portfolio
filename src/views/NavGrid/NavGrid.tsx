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
  console.log('🚀 ~ NavGrid ~ mode:', mode);

  const [hovered, setHovered] = useState<GridLinkProps['type'] | null>(null);
  const [active, setActive] = useState<GridLinkProps['presetArea'] | null>(null);

  const containerBgClass = hovered ? `theme-${hovered}` : 'theme-primary';

  const resetDefaultState = () => {
    setHovered(null);
    setMode('full');
  };

  // todo: wire up to usr scroll top
  const reverse = (e: any) => {
    e.preventDefault();
    if (mode === 'header') {
      setMode('full');
    }
  };

  // on link click:
  // animates out inactive items
  // expands selected item
  // + reverse
  // todo: go to route & start parralax
  const handleClick: GridLinkProps['onClick'] = (e, aArea) => {
    setActive(aArea); // set the active area
    if (mode === 'full') {
      setMode('header'); // set header mode (link changes to header)
    }
  };

  return (
    <>
      <button onClick={resetDefaultState}>Default state</button>

      <button onClick={reverse}>Reverse</button>

      <nav className={classNames('nav-container', containerBgClass)}>
        <GridContainer presetName={'button'}>
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

export type Mode = 'full' | 'header' | null;
