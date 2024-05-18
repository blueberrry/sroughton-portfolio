import React, { useEffect, useState } from 'react';

import { SvgElement, SvgElementProps } from './SvgElement';

import { SVG_PATHS } from './consts';

import './index.scss';

type Props = SvgElementProps;
// returns 4rem² vector icon from local consts file
function FourRems({ name }: Props) {
  const [viewBox, setViewBox] = useState<string>('64 64');

  useEffect(() => {
    if (name?.length > 0) {
      const paths = Object.keys(SVG_PATHS);
      if (paths.includes(name)) {
        setViewBox('24 24');
      }

      if (name === 'paths_projects' || name === 'paths_tools' || name === 'paths_design') {
        setViewBox('512 512');
      }

      if (name === 'img_crab') {
        setViewBox('150 150');
      }
    }

    return () => {
      // Optionally clean up state
    };
  }, [name, setViewBox]);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='4rem'
      height='4rem'
      xmlSpace='preserve'
      version='1.1'
      viewBox={`0 0 ${viewBox}`}
      className={`icon-container ${name}`}>
      <SvgElement name={name} />
    </svg>
  );
}

export default FourRems;
