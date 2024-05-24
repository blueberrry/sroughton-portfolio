import React from 'react';

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  sourceSet?: { phone: string; tablet: string; desktop: string }; // Different sizes/resolutions for differing screen-sizes
};

import './index.scss';

/**
 *
 * @param
 * @returns
 */

function ImageComponent({ src, alt, caption, sourceSet }: Props) {
  return (
    <figure className='img-figure-container'>
      <picture className='img-picture '>
        {sourceSet?.phone && (
          <source media='(min-width: 0px) and (max-width: 767px)' srcSet={sourceSet.phone} type='image/png' />
        )}
        {sourceSet?.tablet && (
          <source media='(min-width: 768px) and (max-width: 1023px)' srcSet={sourceSet.tablet} type='image/jpg' />
        )}
        {sourceSet?.desktop && <source media='(min-width: 1024px)' srcSet={sourceSet.desktop} type='image/jpg' />}

        <img src={src} alt={alt} className='img-standard' />
      </picture>
      {caption && <figcaption className='img-caption'>{caption}</figcaption>}
    </figure>
  );
}

export default ImageComponent;
