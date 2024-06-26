import React, { ReactElement } from 'react';

import { SVG_IMAGES, SVG_PATHS, SVG_TEXT } from './consts';

export type SvgImgProps = keyof typeof SVG_IMAGES;
export type SvgTxtProps = keyof typeof SVG_TEXT;
export type SvgPathsProps = keyof typeof SVG_PATHS;

export type SvgElementProps = { name: SvgImgProps | SvgTxtProps | SvgPathsProps; variant?: 'light' | 'dark' };

// todo: make responsive
export function SvgElement({ name, variant }: SvgElementProps): ReactElement {
  if (name in SVG_IMAGES) {
    const imageAttributes = SVG_IMAGES[name as SvgImgProps];
    return <image width='4rem' height='4rem' {...imageAttributes} className={`${name.split('_')[1]} ${variant}`} />;
  }

  if (name in SVG_TEXT) {
    return (
      <text
        x='2rem'
        y='2rem'
        textAnchor='middle'
        dominantBaseline='middle'
        className={`${name.split('_')[1]} ${variant}`}>
        {SVG_TEXT[name as SvgTxtProps]}
      </text>
    );
  }

  if (name in SVG_PATHS) {
    const pathAttributes = SVG_PATHS[name as SvgPathsProps];

    return (
      <>
        {pathAttributes.map((attr: any, index: number) => {
          return <path {...attr} key={`${attr.d}-${index}`} className={`${name.split('_')[1]} ${variant}`} />;
        })}
      </>
    );
  }
  // Fallback UI error
  return (
    <text x='2rem' y='2rem' textAnchor='middle' dominantBaseline='middle' style={{ fontSize: '1rem', fill: 'red' }}>
      Invalid SVG element name
    </text>
  );
}
