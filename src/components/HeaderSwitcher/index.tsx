import React, { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { NavGrid } from 'src/views/features/NavGrid';
import { Returns as UseThemeReturns } from 'src/hooks/useTheme';
import { TranslateFuncArgs } from 'src/App';

import './index.scss';

export type Props = {
  scrollToContent?: any;
  themeClassName: any;
  theme: UseThemeReturns['theme'];
  setTheme: UseThemeReturns['setTheme'];
  transitionMain?: (arg: TranslateFuncArgs) => void;
  bgType: any; //todo
  mode: any;
  setMode: any;
};

function HeaderSwitcher({
  scrollToContent = () => {},
  themeClassName,
  theme,
  setTheme,
  transitionMain,
  bgType,
  mode,
  setMode,
}: Props) {
  // const [themeClassName, setCurrentThemeClassName] = useState(getThemeClass(bgType, activeTheme));

  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const nodeRef = mode === 'full' ? navRef : titleRef;

  const loc = useLocation();

  // const { theme: hoveredTheme, setTheme: setHoveredTheme } = useTheme(bgType);

  const reverse = (e: any) => {
    e.preventDefault();
    if (mode === 'toTitle' || mode === 'title') {
      setMode('full');
    }
  };

  useEffect(() => {
    if (transitionMain) {
      if (mode === 'title') {
        //callback
        transitionMain('up');
      }

      if (mode === 'full') {
        transitionMain('down');
      }
    }
  }, [mode]);

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
  }, [theme, setTheme]);

  // useEffect(() => {
  //   if (hoveredTheme) {
  //     setTheme(getThemeClass(bgType, hoveredTheme));
  //   }
  // }, [hoveredTheme, setCurrentThemeClassName]);

  return (
    <>
      {mode === 'title' && <button onClick={reverse}>Menu</button>}
      <header className={`header-container ${themeClassName ? themeClassName : `theme-bg-a`}`}>
        <SwitchTransition>
          {/* @ts-ignore */}
          <CSSTransition
            mode='in-out'
            key={mode === 'full' || mode === 'toTitle' ? 'full' : 'title'}
            nodeRef={nodeRef}
            timeout={1000}
            // @ts-ignore
            // addEndListener={(node: any, done: any) => node.addEventListener('transitionend', done, false)}
            classNames='fade'>
            <div ref={nodeRef} className='switch-container'>
              {mode === 'full' || mode === 'toTitle' ? (
                <NavGrid
                  themeClassName={themeClassName}
                  goToContent={scrollToContent}
                  mode={mode}
                  setMode={setMode}
                  theme={theme}
                  setTheme={setTheme}
                  // hovered={hoveredTheme}
                  // setHovered={setHoveredTheme}
                  //                  bgType={bgType}
                />
              ) : (
                <div className='title-container'>
                  <h2>{loc.pathname}</h2>
                </div>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </header>
    </>
  );
}

export default HeaderSwitcher;
