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
  themeClassName: any;
  theme: UseThemeReturns['theme'];
  setTheme: UseThemeReturns['setTheme'];
};
function NavGrid({ goToContent, mode, setMode, themeClassName, theme, setTheme }: Props) {
  const navRef = useRef(null);

  // todo: is there a reason to do this? Might be better to just target ::hover in css
  // const [hovered, setHovered] = useState<GridLinkProps['presetArea'] | null>(null);

  // todo: memoise?
  const configContainerClasses = () => {
    let classes = [themeClassName];

    if (mode === 'toTitle') {
      classes.push('to-title');
    } // todo is this class used?

    return classes.join(' ');
  };

  const resetDefaultState = () => {
    setTheme(null);
    setMode('full');
  };

  const handleClick: GridLinkProps['onClick'] = (e, aArea) => {
    if (setTheme) {
      setTheme(aArea); // set the active area
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
            setTheme={setTheme}
            onClick={handleClick}
            isActive={theme === 'a'}
            mode={mode}
          />

          <GridLink
            linkTo='projects'
            presetArea='b'
            setTheme={setTheme}
            onClick={handleClick}
            isActive={theme === 'b'}
            mode={mode}
          />
          <GridLink
            linkTo='page-3'
            presetArea='c'
            setTheme={setTheme}
            onClick={handleClick}
            isActive={theme === 'c'}
            mode={mode}
          />
          <GridLink
            linkTo='page-4'
            presetArea='d'
            setTheme={setTheme}
            onClick={handleClick}
            isActive={theme === 'd'}
            mode={mode}
          />
          <GridLink
            linkTo='page-5'
            presetArea='e'
            setTheme={setTheme}
            onClick={handleClick}
            isActive={theme === 'e'}
            mode={mode}
          />
          <GridLink
            linkTo='page-6'
            presetArea='f'
            setTheme={setTheme}
            onClick={handleClick}
            isActive={theme === 'f'}
            mode={mode}
          />
        </GridContainer>
      </nav>
    </>
  );
}

// render alongside desktop/ route to on mobile

export default NavGrid;
