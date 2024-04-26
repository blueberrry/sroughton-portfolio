import React, { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { NavGrid } from 'src/views/NavGrid';
import { Returns as UseThemeReturns, useTheme } from 'src/hooks/useTheme';
import { Mode, TranslateFuncArgs } from 'src/App';
import { getThemeClass } from 'src/utils/getThemeClass';

import './index.scss';

export type Props = {
  scrollToContent?: any;
  activeTheme: UseThemeReturns['theme'];
  setActiveTheme: UseThemeReturns['setTheme'];
  transitionMain?: (arg: TranslateFuncArgs) => void;
};

// todo: better to have a function getActiveThemeClass(selected => `theme-${selected}
function HeaderSwitcher({ scrollToContent = () => {}, activeTheme, setActiveTheme, transitionMain }: Props) {
  const [mode, setMode] = useState<Mode>('full');

  const [currentThemeClassName, setCurrentThemeClassName] = useState(getThemeClass(activeTheme));

  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const nodeRef = mode === 'full' ? navRef : titleRef;

  const loc = useLocation();

  const { theme: hoveredTheme, setTheme: setHoveredTheme } = useTheme();

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
    if (activeTheme) {
      setCurrentThemeClassName(getThemeClass(activeTheme));
    }
  }, [activeTheme, setCurrentThemeClassName]);

  useEffect(() => {
    if (hoveredTheme) {
      setCurrentThemeClassName(getThemeClass(hoveredTheme));
    }
  }, [hoveredTheme, setCurrentThemeClassName]);

  return (
    <>
      {mode === 'title' && <button onClick={reverse}>Menu</button>}
      <header className={`header-container ${currentThemeClassName ? currentThemeClassName : `theme-primary`}`}>
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
                  goToContent={scrollToContent}
                  mode={mode}
                  setMode={setMode}
                  activeTheme={activeTheme}
                  setActiveTheme={setActiveTheme}
                  hovered={hoveredTheme}
                  setHovered={setHoveredTheme}
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
