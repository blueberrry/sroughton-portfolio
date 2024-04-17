// TODO: Rename to routes/add routing

import React, { useState } from 'react';
import { GridContainer, ItemAuto } from '../../components/Grid';
//import Img from '../../assets/landscape.jpg';

import './index.scss';
import { ItemAutoProps } from 'src/components/Grid/ItemAuto';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */
// todo: add routing
// todo: go to route on click
// todo: fade animations
// todo: nested route links   home > projects   home > gpt etc
function NavGrid({ goToContent }: any) {
  const [hoveredItem, setHoveredItem] = useState<ItemAutoProps['type']>('primary');

  const containerBgClass = hoveredItem ? `theme-${hoveredItem}` : '';

  return (
    <nav className={classNames('grid-nav', containerBgClass)}>
      <GridContainer presetName={'button'}>
        <ItemAuto type='primary' extraClasses={['area-a']} onHover={(name) => setHoveredItem(name)}>
          <NavLink
            to='home'
            onClick={goToContent}
            className={({ isActive, isPending, isTransitioning }) => {
              // if (isActive) {
              //   // scroll
              //   goToContent();
              // }
              return [
                'nav-item-content',
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ');
            }}>
            Home
          </NavLink>
        </ItemAuto>
        <ItemAuto type='secondary' extraClasses={['area-b']} onHover={(name) => setHoveredItem(name)}>
          <NavLink
            to='projects'
            className={({ isActive, isPending, isTransitioning }) => {
              // if (isActive) {
              //   // scroll
              //   goToContent();
              // }
              return [
                'nav-item-content',
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ');
            }}>
            Projects
          </NavLink>
        </ItemAuto>
        <ItemAuto type='tertiary' extraClasses={['area-c']} onHover={(name) => setHoveredItem(name)}>
          <div className='nav-item-content'>Home</div>
        </ItemAuto>
        <ItemAuto type='primary' extraClasses={['area-d']} onHover={(name) => setHoveredItem(name)}>
          <div className='nav-item-content'>Home</div>
        </ItemAuto>
        <ItemAuto type='secondary' extraClasses={['area-e']} onHover={(name) => setHoveredItem(name)}>
          <div className='nav-item-content'>Home</div>
        </ItemAuto>
        <ItemAuto type='tertiary' extraClasses={['area-f']} onHover={(name) => setHoveredItem(name)}>
          <div className='nav-item-content'>Home</div>
        </ItemAuto>
      </GridContainer>
    </nav>
  );
}

// render alongside desktop/ route to on mobile

export default NavGrid;
