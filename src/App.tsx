import React, { useRef } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Home from 'src/views/Home';
import Projects from 'src/views/Projects';

import './styles/theme/default.scss';
import NavGrid from './views/NavGrid/NavGrid';

// todo: document with comments
// todo: all page content should be main footer so create single component that does this and pass style
//       then just render child comps
/**
 * * Pseudo
 * 0 Start loading in page
 * 1 make other grid items dissapear one at a time (random order)
 * 2 transition selected item to be full width of container (break out)
 *
 * 3 fade scroll in subsequent page OR fade in + up
 */

export function App() {
  // todo: useLayoutEffect
  const scrollRef = useRef(null) as any; // todo:

  // todo: better way
  const scrollToContent = () => setTimeout(() => scrollRef.current.scrollIntoView({ behavior: 'smooth' }), 500);

  // play around with translateY Values once header height reduced
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
        <NavGrid goToContent={scrollToContent} />
      </Parallax>
      <Parallax speed={10}>
        <Outlet />
      </Parallax>
    </ParallaxProvider>
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
