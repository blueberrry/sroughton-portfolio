import React, { useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { NavGrid } from 'src/views/NavGrid';

import { Props as GridLinkProps } from '../../views/NavGrid/GridLink';

import './index.scss';
import { useLocation } from 'react-router-dom';

type Props = {
  scrollToContent?: any;
};

export type Mode = 'full' | 'toTitle' | 'title' | null;

function HeaderSwitcher({ scrollToContent = () => {} }: Props) {
  const [mode, setMode] = useState<Mode>('full');
  const [active, setActive] = useState<GridLinkProps['presetArea'] | null>(null);

  console.log('🚀 ~ HeaderSwitcher ~ mode:', mode);

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
      <header className={`header-container theme-${active}`}>
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
