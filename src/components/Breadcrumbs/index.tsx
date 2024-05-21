import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import FourRems from '../../icons/FourRems';

import { BREADCRUMB_ROOTS } from 'src/consts';
import { firstCharUpper } from '../../utils/firstCharUpper';

import './index.scss';

type Props = { root?: (typeof BREADCRUMB_ROOTS)[number]; pathnames: string[] }; // todo: Generic type of rout names/hrefs

const BreadCrumbIcon = ({ name }: { name: string }) => {
  // todo: potential generic type here
  if (name === 'home') {
    return <FourRems name='paths_home' variant='light' size='small' />;
  }

  if (name === 'projects') {
    return <FourRems name='paths_projects' variant='light' size='small' />;
  }
  return null;
};
// todo: test click action in story
// todo: Icons (home/projects etc)
export function BreadCrumbs({ root = null, pathnames }: Props) {
  if (!root && pathnames.length < 1) {
    // component must have at least two routes?
    // nah get rid, should be able to handle one route only
    return <></>;
  }

  return (
    <nav className='breadcrumb-container'>
      <ol role='navigation' className='breadcrumb-list'>
        {root && (
          <li className='breadcrumb-item first' key={`_first-item`}>
            <Link to='/'>{firstCharUpper(root)}</Link>
          </li>
        )}

        {pathnames &&
          pathnames.map((part, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            let isFirst = !root && index === 0;
            let isLast = index === pathnames.length - 1;

            return (
              <li
                key={`${part}-${index}`}
                className={`breadcrumb-item ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}`}>
                <NavLink to={routeTo}>
                  <span className='icon-container'>
                    <BreadCrumbIcon name={part} />
                  </span>
                  {part}
                </NavLink>
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
