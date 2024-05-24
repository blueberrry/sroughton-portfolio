import React, { useContext, useEffect, useRef, useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import ThemeProvider, { ThemeContext } from './context/ThemeContext';

import Home from 'src/views/pages/Home';
import Projects from 'src/views/pages/Projects';

import { Main } from './components/Layouts';
import HeaderSwitcher from './components/HeaderSwitcher';
import { useBgClass } from './hooks/useBgClass';
import { BgStates } from './types/types';

import './root.scss';

// todo: 🎉🚮 STORYBOOOOOOOOOOK
// todo: document with comments
// todo: all page content should be main footer so create single component that does this and pass style
//       then just render child comps
export type TranslateFuncArgs = 'up' | 'down';

export type Mode = 'full' | 'toTitle' | 'title' | null;

export function App() {
  const { theme, changeTheme } = useContext(ThemeContext);

  // todo: extract to hook?
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // const scrollRef = useRef(null) as any; // todo:
  const mainContainerRef = useRef(null);

  const [transitionMainUp, setMainTransitionUp] = useState<boolean>(false);

  const [headerMode, setHeaderMode] = useState<Mode>('full');

  const bgStates = ['bg', 'img', 'grad'];
  const initial = bgStates[0] as BgStates;

  const [bgType, setBgType] = useState<BgStates>(initial);

  const { activeArea, setActiveArea, className: activeAreaBgClass } = useBgClass({ bgType });

  // card styled section title text, spacing, icons

  // const scrollToContent = () => setTimeout(() => scrollRef.current.scrollIntoView({ behavior: 'smooth' }), 500);

  function translateUp(direction: TranslateFuncArgs) {
    if (direction === 'up') {
      console.log('transition up');
      setMainTransitionUp(true);
      return true;
    }

    if (direction === 'down') {
      console.log('transition down');
      setMainTransitionUp(false);
      return false;
    }

    console.warn('Function argument needs to be up or down');
    return undefined;
  }

  // todo: theme in context vs prop drilling?
  return (
    <div className='parallax-container'>
      {/* todo: move logic to storybook story */}
      {headerMode === 'full' && (
        <form className='temp-form' onSubmit={(e) => e.preventDefault()}>
          <button onClick={() => changeTheme('default')}>Default Theme</button>
          <button onClick={() => changeTheme('tropical')}>Tropical Theme</button>
          <button onClick={() => changeTheme('mystic')}>Mystic Theme</button>
          <button onClick={() => changeTheme('night')}>Night Theme</button>
          <button onClick={() => changeTheme('purple-hills')}>Purple hills Theme</button>
          <button onClick={() => changeTheme('tropical')}>Tropical Theme</button>

          <fieldset>
            <label> BG color </label>
            <input
              type='radio'
              // defaultChecked
              name='bg'
              value={bgStates[0]}
              checked={bgType === bgStates[0]}
              onChange={() => setBgType('bg')}
            />
          </fieldset>
          <fieldset>
            <label> BG img </label>
            <input
              type='radio'
              name='img'
              value={bgStates[1]}
              checked={bgType === bgStates[1]}
              onChange={() => setBgType('img')}
            />
          </fieldset>
          <fieldset>
            <label> BG gradient </label>
            <input
              type='radio'
              name='grad'
              value={bgStates[2]}
              checked={bgType === bgStates[2]}
              onChange={() => setBgType('grad')}
            />
          </fieldset>
        </form>
      )}

      <HeaderSwitcher
        bgClassName={activeAreaBgClass}
        activeArea={activeArea}
        setActiveArea={setActiveArea}
        transitionMain={translateUp}
        bgType={bgType}
        mode={headerMode}
        setMode={setHeaderMode}
      />
      <CSSTransition
        nodeRef={mainContainerRef}
        in={transitionMainUp}
        timeout={200}
        classNames='main-container'
        unmountOnExit={true}>
        <div ref={mainContainerRef}>
          <Main active={activeArea} type='primary'>
            <Outlet />
          </Main>
        </div>
      </CSSTransition>
      <footer>{/* Todo: */}</footer>
    </div>
  );
}

function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='page-3' element={<Projects />} />
        <Route path='page-4' element={<Projects />} />
        <Route path='page-5' element={<Projects />} />
        <Route path='page-6' element={<Projects />} />

        {/* todo: close/clear routes so we go to nav only */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export function createApp() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
