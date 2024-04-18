import React, { MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ItemAuto } from 'src/components/Grid';
import { ThemeNames } from 'src/types/types';

import './index.scss';

const areaTransitionDelays = {
  a: '250ms',
  b: '500ms',
  c: '750ms',
  d: '1000ms',
  e: '1250ms',
  f: '1500ms',
};

function GridLink({ linkTo, type, presetArea, setHoveredItem, onClick, isActive, isTransitioning }: Props) {
  const [containerClasses, setContainerClasses] = useState('');

  useEffect(() => {
    if (isTransitioning) {
      if (isActive) {
        // containerClasses = isActive ? 'show' : '';
      }
      // c
      if (!isActive) {
        // containerClasses = 'transitioning';
        // add class depending on order in array of remaining items

        const classes = `transitioning-${areaTransitionDelays[presetArea]}`;
        setContainerClasses(classes);
        console.log('🚀 ~ useEffect ~ classes:', classes);
        // const areas = ['a', 'b', 'c', 'd', 'e', 'f'];
        // const inActiveAreas = areas.filter((a) => presetArea !== a); //rmv this area
        // inActiveAreas.forEach((area) => {
        //   if (inActiveAreas.indexOf(presetArea) > -1) {
        //     setTimeout(() => {
        //       containerClasses = 'transitioning';
        //     }, [areaTransitionDelays]);
        //   }
        // });
      }
    } else {
      setContainerClasses('');
    }

    // return () => {
    //   second;
    // };
  }, [isTransitioning, isActive, setContainerClasses]);

  return (
    <ItemAuto
      type={type}
      extraClasses={[`area-${presetArea} ${containerClasses}`]}
      onHover={(name) => name && setHoveredItem(name)}>
      <NavLink
        to={linkTo}
        onClick={(e) => onClick(e, presetArea)}
        className={() => {
          // { isActive, isPending, isTransitioning }
          // if (isActive) {
          //   // scroll
          //   goToContent();
          // }
          return [
            'grid-link-content',
            // isPending ? 'pending' : '', // todo: unused
            // isActive ? 'active' : 'inactive', // if active class, start animation
            // isTransitioning ? 'transitioning' : '',
          ].join(' ');
        }}>
        Home
      </NavLink>
    </ItemAuto>
  );
}

export default GridLink;

export type Props = {
  linkTo: '/' | 'home' | 'projects' | 'page-3' | 'page-4' | 'page-5' | 'page-6';
  type: ThemeNames; // style type
  presetArea: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'; // preset areas defined in GridContainer
  setHoveredItem: React.Dispatch<React.SetStateAction<Props['type']>>;
  onClick: (e: MouseEvent<HTMLAnchorElement>, aArea: Props['presetArea']) => void;
  //setActiveItem: React.Dispatch<React.SetStateAction<Props['presetArea']>>;
  isActive: boolean;
  isTransitioning: boolean;
};
