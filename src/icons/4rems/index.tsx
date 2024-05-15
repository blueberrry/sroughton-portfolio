import React, { ReactElement } from 'react';

import { SVG_IMAGES, SVG_TEXT } from './consts';

type SvgImgProps = keyof typeof SVG_IMAGES;
type SvgTxtProps = keyof typeof SVG_TEXT;

type Props = {
  name: SvgImgProps | SvgTxtProps;
};

function getSvgElement(name: Props['name']): ReactElement<any, any> {
  if (name in SVG_IMAGES) {
    return <>{SVG_IMAGES[name as SvgImgProps]}</>; // Type assertion required
  } else if (name in SVG_TEXT) {
    return <>{SVG_TEXT[name as SvgTxtProps]}</>; // Type assertion required
  }
  throw new Error('Invalid SVG element name');
}

// todo: create a list of icons that are ~4rem sized (trasnparent bg and square)
// returns max-width 4rem vector icon
function FourRems({ name }: Props) {
  if (!name) {
    return <></>;
  }

  // const getMarkup = () => {
  //   const images = Object.keys(SVG_IMAGES) as Array<SvgImgProps['name']>;
  //   const text = Object.keys(SVG_TEXT) as Array<SvgTxtProps['name']>;
  //   const allMarkup = [...images, ...text];

  //   if (!name) {
  //     return null;
  //   }
  //   if (allMarkup.includes(name)) {
  //     let key: string = name.toString();
  //     const markup: Element = SVG_IMAGES[key] as Element;
  //     return markup;
  //   }
  // };

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
      {getSvgElement(name)}
      {/* <SVGImage name='crab' />
      <SVGText name='crab' /> */}
    </svg>
  );
}

export default FourRems;
