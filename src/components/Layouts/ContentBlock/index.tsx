import React from 'react';
//import { Paragraph, ResponsiveImage } from 'src/components';
import ResponsiveImage from '../../ResponsiveImage';
import { Paragraph } from '../../Typography';
import { ContentBlockTypes } from 'src/types/types';

import './index.scss';

type Props = { images: ContentBlockTypes; paragraph: string };

/**
 * * Layout options for a chunk of text with images before and/or after
 * @param
 * @returns
 *
 * TODO:
 * Before image only, display LHS of text
 * After image only, display RHS of text
 * All display before and after
 * Mobile stack
 * ~~ Other layouts if necessary
 *
 * TODO: Currently looks a mess spacing-wise, find a better way or restructure data to include more paragraphs or include images differently
 */

function ContentBlock({ images, paragraph }: Props) {
  // Returns just the paragraph if no images
  if (images?.before === null && images?.after === null) {
    return <Paragraph>{paragraph}</Paragraph>;
  }

  // return new layout one or both images are present
  return (
    <div className='content-item-container'>
      {images?.before && <ResponsiveImage src={images.before.href} alt={images.before.alt} />}
      <Paragraph>{paragraph}</Paragraph>
      {images?.after && <ResponsiveImage src={images.after.href} alt={images.after.alt} />}
    </div>
  );
}

export default ContentBlock;
