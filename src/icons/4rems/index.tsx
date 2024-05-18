import React, { useEffect, useState } from 'react';

import { SvgElement, SvgElementProps } from './SvgElement';
import { SVG_PATHS } from './consts';

type Props = SvgElementProps;
// returns 4rem² vector icon from local consts file
function FourRems({ name }: Props) {
  const [viewBox, setViewBox] = useState('4rem 4rem');
  const [fill, setFill] = useState({ fill: 'none' }); // todo: check if working as intended

  useEffect(() => {
    if (name?.length > 0) {
      const paths = Object.keys(SVG_PATHS);
      if (paths.includes(name)) {
        setViewBox('24 24');
      }

      if (name === 'projectsPaths') {
        setViewBox('512 512');
      }
    }
    

    return () => {
      // Optionally clean up state
    };
  }, [name, setViewBox]);

  useEffect(() => {
    if (name?.length > 0) {
      if (name === 'plusPaths') {
        setFill({ fill: 'none' });
      }
    }

    return () => {
      // Optionally clean up sate
    };
  }, [name, setFill]);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='4rem'
      height='4rem'
      xmlSpace='preserve'
      version='1.1'
      viewBox={`0 0 ${viewBox}`}
      {...fill}>
      <SvgElement name={name} />
    </svg>
  );
}

export default FourRems;
