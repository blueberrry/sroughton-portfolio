// TODO: Rename to routes/add routing

import React, { useState } from 'react';
import { GridContainer, ItemAuto } from '../../components/Grid/';
//import Img from '../../assets/landscape.jpg';

import './index.scss';
import { ItemAutoProps } from 'src/components/Grid/ItemAuto';
import { Main } from 'src/components/Main';

/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */
// todo: add routing
// todo: go to route on click
// todo: fade animations
// todo: nested route links   home > projects   home > gpt etc
function Home() {
  const [hoveredItem, setHoveredItem] = useState<ItemAutoProps['type']>('primary');

  const containerBgClass = true ? `theme-${hoveredItem}` : '';

  return (
    <Main extraClasses={[containerBgClass]}>
      <GridContainer presetName={'button'}>
        <ItemAuto type='primary' extraClasses={['area-a']} onHover={(name) => setHoveredItem(name)}>
          <section className='practice-page-section'></section>
        </ItemAuto>
        <ItemAuto type='secondary' extraClasses={['area-b']} onHover={(name) => setHoveredItem(name)}>
          <section className='practice-page-section'></section>
        </ItemAuto>
        <ItemAuto type='tertiary' extraClasses={['area-c']} onHover={(name) => setHoveredItem(name)}>
          <section className='practice-page-section'></section>
        </ItemAuto>
        <ItemAuto type='primary' extraClasses={['area-d']} onHover={(name) => setHoveredItem(name)}>
          <section className='practice-page-section'></section>
        </ItemAuto>
        <ItemAuto type='secondary' extraClasses={['area-e']} onHover={(name) => setHoveredItem(name)}>
          <section className='practice-page-section'></section>
        </ItemAuto>
        <ItemAuto type='tertiary' extraClasses={['area-f']} onHover={(name) => setHoveredItem(name)}>
          <section className='practice-page-section'></section>
        </ItemAuto>
      </GridContainer>
    </Main>
  );
}

// render alongside desktop/ route to on mobile

export default Home;
