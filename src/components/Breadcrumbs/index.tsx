import React from 'react';
import { Link } from 'react-router-dom';
import FourRems from 'src/icons/4rems';

import { BREADCRUMB_ROOTS } from 'src/consts';
import { firstCharUpper } from '../../utils/firstCharUpper';

import './index.scss';

type Props = { root?: (typeof BREADCRUMB_ROOTS)[number]; pathnames: string[] }; // todo: Generic type of rout names/hrefs

// todo: Icons (home/projects etc)
export function BreadCrumbs({ root = null, pathnames }: Props) {
  console.log('🚀 ~ BreadCrumbs ~ pathnames:', pathnames);
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
            const isFirst = !root && index === 0;
            const isLast = index === pathnames.length - 1 && index !== 0;

            return (
              <li
                key={`${part}-${index}`}
                className={`breadcrumb-item ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}`}>
                <Link to={routeTo}>{part}</Link>
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
