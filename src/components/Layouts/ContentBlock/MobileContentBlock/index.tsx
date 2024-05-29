import React from 'react';
//import { Paragraph, ResponsiveImage } from 'src/components';
import ResponsiveImage from '../../../ResponsiveImage';
import { Paragraph } from '../../../Typography';
import { Image_JSON } from 'src/types/types';

import './index.scss';

type Props = { id: string; image?: Image_JSON; paragraph: string };

/**
 * * Layout options for a chunk of text with images before and/or after
 * @param
 * @returns
 *
 * TODO: Render respective image beneath on mobile
 * TODO: Render alongside on desktop/tablet/fold
 * TODO: Fix position on desktop
 * TODO: Fade new images on scroll of pragraphs (LHS scroll, RHS fixed)
 * TODO: Zigzag pattern
 * TODO: ~~ Other layouts if necessary
 *
 *  * for desktop, it would be better if component had all paragraphs[] and all images[] so it can switch
 *  * images on the fly
 *
 */

function MobileContentBlock({ paragraph, image }: Props) {
  return (
    <div className='content-item-container'>
      <Paragraph>{paragraph}</Paragraph>
      {image && <ResponsiveImage src={image.src} alt={image.alt} caption={image.caption} sourceSet={image?.srcSet} />}
    </div>
  );
}

export default MobileContentBlock;
