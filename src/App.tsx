import React, { useRef } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Link,
  Outlet,
} from 'react-router-dom';

import Home from 'src/views/Home';
import Projects from 'src/views/Projects';

import './styles/theme/default.scss';
import NavGrid from './views/NavGrid';

// todo: routing
// todo: document with comments

export function App() {
  // todo: useLayoutEffect
  const scrollRef = useRef(null) as any; // todo:

  // todo: better way
  const scrollToContent = () => setTimeout(() => scrollRef.current.scrollIntoView({ behavior: 'smooth' }), 500);

  return (
    <div>
      <div id='nav'>
        {/* 
        <Link to='projects'>Projects</Link> */}
        <button onClick={scrollToContent}>Scroll</button>
        <NavGrid goToContent={scrollToContent} />
      </div>
      <div id='nested-routes' ref={scrollRef}>
        <Outlet />
      </div>
    </div>
  );
}

function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        {/* todo: close/clear routes so we go to nav only */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export function createApp() {
  return <AppRoutes />;
}
