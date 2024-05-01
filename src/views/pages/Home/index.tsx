// TODO: Rename to routes/add routing

import React, { useState } from 'react';

import { useMatches } from 'react-router-dom';
import BreadCrumbs from 'src/components/Breadcrumbs';

import './index.scss';
/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */

function Home() {
  // const [hoveredItem, setHoveredItem] = useState<ItemAutoProps['type']>('primary');

  // const containerBgClass = true ? `theme-${hoveredItem}` : '';

  const matches = useMatches();
  console.log('🚀 ~ Home ~ matches:', matches);

  return <Layouts type='mainSection'></Layouts>;
}

// render alongside desktop/ route to on mobile

export default Home;
