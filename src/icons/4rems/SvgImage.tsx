// export const SVG = { crab: Crab };

import React from 'react';
import { SVG_IMAGES } from './consts';

export type Props = { name: keyof typeof SVG_IMAGES };

function SvgImage({ name }: Props) {
  const Img = () => (name ? SVG_IMAGES[name] : <></>);
  return <Img />;
}

export default SvgImage;
