import React, { useRef } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

import Home from 'src/views/Home';
import Projects from 'src/views/Projects';

import './root.scss';
import { Main } from './components/Main';
import HeaderSwitcher from './components/Header';
// todo: document with comments
// todo: all page content should be main footer so create single component that does this and pass style
//       then just render child comps

export function App() {
  // todo: useLayoutEffect
  const scrollRef = useRef(null) as any; // todo:

  // todo: better way
  const scrollToContent = () => setTimeout(() => scrollRef.current.scrollIntoView({ behavior: 'smooth' }), 500);

  return (
    <div className='parallax-container'>
      <HeaderSwitcher />
      <Main>
        <Outlet />
      </Main>
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
