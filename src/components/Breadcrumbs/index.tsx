import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './index.scss';

type Props = {};

export function BreadCrumbs({}: Props) {
  const location = useLocation();
  console.log('🚀 ~ BreadCrumbs ~ location:', location);
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log('🚀 ~ BreadCrumbs ~ pathnames:', pathnames);

  return (
    <nav className='breadcrumb-container'>
      <ol role='navigation' className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link to='/'>Home</Link>
        </li>
        {pathnames.map((part, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={part} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? part : <Link to={routeTo}>{part}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
