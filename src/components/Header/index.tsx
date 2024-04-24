import React, { useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { NavGrid } from 'src/views/NavGrid';

import GridLink, { Props as GridLinkProps } from '../../views/NavGrid/GridLink';

import './index.scss';

type Props = {
  scrollToContent?: any;
};

export type Mode = 'full' | 'toTitle' | 'title' | null;

function HeaderSwitcher({ scrollToContent = () => {} }: Props) {
  const [mode, setMode] = useState<Mode>('full');
  const [active, setActive] = useState<GridLinkProps['presetArea'] | null>(null);

  console.log('🚀 ~ HeaderSwitcher ~ mode:', mode);

  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const nodeRef = mode === 'full' ? navRef : titleRef;

  // todo: header needs navgrids background

  // const SwitchComponent = () => {
  //   if (mode === 'full' || mode === 'toTitle') {
  //     return <NavGrid goToContent={scrollToContent} setMode={setMode} mode={mode} />;
  //   }

  //   if (mode === 'title') {
  //     return <h1> HEADER </h1>;
  //   }

  //   return <></>;
  // };

  const reverse = (e: any) => {
    e.preventDefault();
    if (mode === 'toTitle' || mode === 'title') {
      setMode('full');
    }
  };

  return (
    <header className='header-container'>
      <button onClick={reverse}>Reverse</button>
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
          <div ref={nodeRef}>
            {mode === 'full' || mode === 'toTitle' ? (
              <NavGrid
                goToContent={scrollToContent}
                setMode={setMode}
                mode={mode}
                active={active}
                setActive={setActive}
              />
            ) : (
              <h2>HOME</h2>
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </header>
  );
}

export default HeaderSwitcher;
