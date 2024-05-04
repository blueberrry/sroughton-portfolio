import React from 'react';
import { SVG } from './SvgMarkup';

type Props = {
  iconName: keyof typeof SVG;
};

// returns max-width 4rem vector icon
function FourRems({ iconName }: Props) {
  if (!iconName) {
    return <></>;
  }
  const getMarkup = () => SVG[iconName];

  return (
    <svg
      style={{ maxWidth: '4rem' }}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='4rem'
      height='auto'
      xmlSpace='preserve'
      version='1.1'
      viewBox='0 0 150 152'>
      {getMarkup()}
    </svg>
  );
}

export default FourRems;
