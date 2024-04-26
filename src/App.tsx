import React, { useRef, useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

import Home from 'src/views/Home';
import Projects from 'src/views/Projects';

import { Main } from './components/Main';
import HeaderSwitcher from './components/HeaderSwitcher';
import { useTheme } from './hooks/useTheme';
import './root.scss';
// todo: document with comments
// todo: all page content should be main footer so create single component that does this and pass style
//       then just render child comps
export type TranslateFuncArgs = 'up' | 'down';

export type Mode = 'full' | 'toTitle' | 'title' | null;

export function App() {
  // todo: useLayoutEffect
  // const scrollRef = useRef(null) as any; // todo:
  const mainContainerRef = useRef(null);

  const [transitionMainUp, setMainTransitionUp] = useState<boolean>(false);

  const { theme: activeTheme, setTheme: setActiveTheme, className: activeThemeClassName } = useTheme();

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
      <HeaderSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} transitionMain={translateUp} />
      <CSSTransition
        nodeRef={mainContainerRef}
        in={transitionMainUp}
        timeout={200}
        classNames='main-container'
        unmountOnExit={true}>
        <div ref={mainContainerRef}>
          <Main extraClasses={activeThemeClassName ? [activeThemeClassName] : []}>
            <Outlet />
          </Main>
        </div>
      </CSSTransition>
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
  return <AppRoutes />;
}
