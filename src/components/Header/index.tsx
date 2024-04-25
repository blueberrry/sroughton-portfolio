import React, { useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { NavGrid } from 'src/views/NavGrid';
import { ThemeNames } from 'src/types/types';

import './index.scss';

type Props = {
  scrollToContent?: any;
  activeTheme: ThemeNames | null;
  setActiveTheme: React.Dispatch<React.SetStateAction<Props['activeTheme']>>;
};

export type Mode = 'full' | 'toTitle' | 'title' | null;

// todo: better to have a function getActiveThemeClass(selected => `theme-${selected}
function HeaderSwitcher({ scrollToContent = () => {}, activeTheme: active, setActiveTheme: setActive }: Props) {
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

  return (
    <>
      {mode === 'title' && <button onClick={reverse}>Menu</button>}
      <header className={`header-container ${active ? `theme-${active}` : `theme-primary`}`}>
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
                  active={active}
                  setActive={setActive}
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
