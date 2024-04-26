import React, { useEffect, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { NavGrid } from 'src/views/NavGrid';
import { ThemeNames } from 'src/types/types';
import { Returns as UseThemeReturns } from 'src/hooks/useTheme';

import './index.scss';
import { Mode, TranslateFuncArgs } from 'src/App';

export type Props = {
  scrollToContent?: any;
  activeTheme: UseThemeReturns['activeTheme'];
  setActiveTheme: UseThemeReturns['setActiveTheme'];
  transitionMain?: (arg: TranslateFuncArgs) => void;
};

// todo: better to have a function getActiveThemeClass(selected => `theme-${selected}
function HeaderSwitcher({ scrollToContent = () => {}, activeTheme, setActiveTheme, transitionMain }: Props) {
  const [mode, setMode] = useState<Mode>('full');

  const loc = useLocation();

  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const nodeRef = mode === 'full' ? navRef : titleRef;

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

  return (
    <>
      {mode === 'title' && <button onClick={reverse}>Menu</button>}
      <header className={`header-container ${activeTheme ? `theme-${activeTheme}` : `theme-primary`}`}>
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
            <div ref={nodeRef} style={{ width: '100%' }}>
              {mode === 'full' || mode === 'toTitle' ? (
                <NavGrid
                  goToContent={scrollToContent}
                  setMode={setMode}
                  mode={mode}
                  activeTheme={activeTheme}
                  setActiveTheme={setActiveTheme}
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
