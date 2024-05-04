import React, { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { NavGrid } from 'src/views/features/NavGrid';
import { Returns as UseThemeReturns } from 'src/hooks/useBgClass';
import { TranslateFuncArgs } from 'src/App';

import './index.scss';

export type Props = {
  scrollToContent?: any;
  bgClassName: any;
  activeArea: UseThemeReturns['activeArea'];
  setActiveArea: UseThemeReturns['setActiveArea'];
  transitionMain?: (arg: TranslateFuncArgs) => void;
  bgType: any; //todo
  mode: any;
  setMode: any;
};

function HeaderSwitcher({
  scrollToContent = () => {},
  bgClassName,
  activeArea,
  setActiveArea,
  transitionMain,
  bgType,
  mode,
  setMode,
}: Props) {
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const nodeRef = mode === 'full' ? navRef : titleRef;

  const loc = useLocation();

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
    if (activeArea) {
      setActiveArea(activeArea);
    }
  }, [activeArea, setActiveArea]);

  // useEffect(() => {
  //   if (hoveredTheme) {
  //     setTheme(getThemeClass(bgType, hoveredTheme));
  //   }
  // }, [hoveredTheme, setCurrentThemeClassName]);

  return (
    <>
      {mode === 'title' && <button onClick={reverse}>Menu</button>}
      <header className={`header-container ${bgClassName ? bgClassName : `bg-a`}`}>
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
                  bgClassName={bgClassName}
                  goToContent={scrollToContent}
                  mode={mode}
                  setMode={setMode}
                  activeArea={activeArea}
                  setActiveArea={setActiveArea}
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
