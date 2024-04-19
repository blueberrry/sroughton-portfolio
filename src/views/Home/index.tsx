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

function Home() {
  // const [hoveredItem, setHoveredItem] = useState<ItemAutoProps['type']>('primary');

  // const containerBgClass = true ? `theme-${hoveredItem}` : '';

  return (
    <Main>
      <h1>Home page</h1>
    </Main>
  );
}

// render alongside desktop/ route to on mobile

export default Home;
