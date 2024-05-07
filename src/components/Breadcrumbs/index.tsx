import React from 'react';
import { Link } from 'react-router-dom';
import FourRems from 'src/icons/4rems';

import './index.scss';

type Props = { seperators: boolean; root?: 'home' | 'nav' | null; pathnames: string[] }; // todo: Generic type of rout names/hrefs

export function BreadCrumbs({ seperators, root = null, pathnames }: Props) {
  console.log('🚀 ~ BreadCrumbs ~ pathnames:', pathnames);
  return (
    <nav className='breadcrumb-container'>
      <ol role='navigation' className='breadcrumb'>
        {root && (
          <li className='breadcrumb-item'>
            <span>
              <Link to='/'>{root.charAt(0).toUpperCase()}</Link> &nbsp; | + &nbsp;
            </span>
            {seperators && <Seperator />}
          </li>
        )}

        {pathnames &&
          pathnames.map((part, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            console.log('🚀 ~ BreadCrumbs ~ isLast:', isLast);
            console.log('🚀 ~ BreadCrumbs ~ routeTo:', routeTo);
            return (
              <li key={`${part}-${index}`} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                <span>{isLast ? part : <Link to={routeTo}>{part}</Link>}</span>
                {seperators && <Seperator />}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}

function Seperator() {
  return <span> | </span>;
}

// import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import FourRems from 'src/icons/4rems';

// import './index.scss';

// type Props = {};

// export function BreadCrumbs({}: Props) {
//   // const location = useLocation();
//   // console.log('🚀 ~ BreadCrumbs ~ location:', location);
//   // const pathnames = location.pathname.split('/').filter((x) => x);
//   // console.log('🚀 ~ BreadCrumbs ~ pathnames:', pathnames);

//   return (
//     <nav className='breadcrumb-container'>
//       <ol role='navigation' className='breadcrumb'>
//         <li className='breadcrumb-item'>test</li>
//       </ol>
//     </nav>
//   );
// }
