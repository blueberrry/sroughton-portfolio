import React, { ReactElement } from 'react';

import { SVG_IMAGES, SVG_TEXT } from './consts';

type SvgImgProps = keyof typeof SVG_IMAGES;
type SvgTxtProps = keyof typeof SVG_TEXT;

type Props = {
  name: SvgImgProps | SvgTxtProps;
};

// todo: make responsive or pass props to adjust size: sm/md/lg
function getSvgElement(name: Props['name']): ReactElement {
  if (name in SVG_IMAGES) {
    const imageAttributes = SVG_IMAGES[name as SvgImgProps];
    return <image width='4rem' height='4rem' {...imageAttributes} />; // Type assertion required
  } else if (name in SVG_TEXT) {
    return (
      <text
        x='2rem'
        y='2rem'
        textAnchor='middle'
        dominantBaseline='middle'
        style={{ fontSize: '2.5rem', fill: 'var(--primary-color)' }}>
        {SVG_TEXT[name as SvgTxtProps]}
      </text>
    ); // Type assertion required
  }
  throw new Error('Invalid SVG element name');
}

// returns 4rem² vector icon from local consts file
function FourRems({ name }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='4rem'
      height='4rem'
      xmlSpace='preserve'
      version='1.1'
      viewBox='0 0 4rem 4rem'>
      {getSvgElement(name)}
    </svg>
  );
}

export default FourRems;
