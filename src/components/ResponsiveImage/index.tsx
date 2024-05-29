import React from 'react';

type Props = {
  src: string;
  alt?: string;
  caption?: string | null;
  sourceSet?: { mobile?: string | null; tablet?: string | null; desktop?: string | null }; // Different sizes/resolutions for differing screen-sizes
};

import './index.scss';

/**
 * TODO: Placeholder image if fails to load - or handled higher up
 * @param
 * @returns
 */

function ResponsiveImage({ src, alt, caption, sourceSet }: Props) {
  return (
    <figure className='img-figure-container'>
      <picture className='img-picture '>
        {sourceSet?.mobile && <source media='(min-width: 0px) and (max-width: 767px)' srcSet={sourceSet.mobile} />}
        {sourceSet?.tablet && <source media='(min-width: 768px) and (max-width: 1023px)' srcSet={sourceSet.tablet} />}
        {sourceSet?.desktop && <source media='(min-width: 1024px)' srcSet={sourceSet.desktop} />}

        <img src={src} alt={alt} className='img-standard' />
      </picture>
      {caption && <figcaption className='img-caption'>{caption}</figcaption>}
    </figure>
  );
}

export default ResponsiveImage;
