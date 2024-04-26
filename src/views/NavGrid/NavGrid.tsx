// TODO: Rename to routes/add routing

import React, { useRef } from 'react';
import { GridContainer } from '../../components/Grid';

import classNames from 'classnames';
import GridLink, { Props as GridLinkProps } from './GridLink';
import { Mode as HeaderMode } from 'src/App';
import { getThemeClass } from 'src/utils/getThemeClass';
import { Returns as UseThemeReturns } from 'src/hooks/useTheme';

import './index.scss';
/**
 * Hover to focus
 * tap to reveal (animates grid, pulls up next screen)
 */

// todo: add props with children
export type Props = {
  goToContent: any; //todo:
  mode: HeaderMode;
  setMode: React.Dispatch<React.SetStateAction<HeaderMode>>; // todo: Header could have generic type
  activeTheme: UseThemeReturns['theme'];
  setActiveTheme: UseThemeReturns['setTheme'];
  hovered: UseThemeReturns['theme'];
  setHovered: UseThemeReturns['setTheme'];
};
function NavGrid({ goToContent, mode, setMode, activeTheme, setActiveTheme, hovered, setHovered }: Props) {
  const navRef = useRef(null);

  // todo: is there a reason to do this? Might be better to just target ::hover in css
  // const [hovered, setHovered] = useState<GridLinkProps['presetArea'] | null>(null);

  // todo: memoise?
  const configContainerClasses = () => {
    let classes = [];

    if (hovered) {
      const themeClass = getThemeClass(hovered);
      classes.push(themeClass);
    } else {
      const themeClass = getThemeClass(activeTheme);
      classes.push(themeClass);
    }

    if (mode === 'toTitle') {
      classes.push('to-title');
    } // todo is this class used?

    return classes.join(' ');
  };

  const resetDefaultState = () => {
    setHovered(null);
    setMode('full');
  };

  const handleClick: GridLinkProps['onClick'] = (e, aArea) => {
    if (setActiveTheme) {
      setActiveTheme(aArea); // set the active area
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
        <GridContainer presetName='grid_3_3' extraClasses={['nav-list-container']}>
          <GridLink
            linkTo='home'
            presetArea='a'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={activeTheme === 'a'}
            mode={mode}
          />

          <GridLink
            linkTo='projects'
            presetArea='b'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={activeTheme === 'b'}
            mode={mode}
          />
          <GridLink
            linkTo='page-3'
            presetArea='c'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={activeTheme === 'c'}
            mode={mode}
          />
          <GridLink
            linkTo='page-4'
            presetArea='d'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={activeTheme === 'd'}
            mode={mode}
          />
          <GridLink
            linkTo='page-5'
            presetArea='e'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={activeTheme === 'e'}
            mode={mode}
          />
          <GridLink
            linkTo='page-6'
            presetArea='f'
            setHoveredItem={setHovered}
            onClick={handleClick}
            isActive={activeTheme === 'f'}
            mode={mode}
          />
        </GridContainer>
      </nav>
    </>
  );
}

// render alongside desktop/ route to on mobile

export default NavGrid;
