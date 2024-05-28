import React, { useCallback, useEffect, useRef, useState } from 'react';
//import { Paragraph, ResponsiveImage } from 'src/components';
import ResponsiveImage from '../../../ResponsiveImage';
import { Paragraph } from '../../../Typography';
import useIntersectionObserver, { ObserverEntry } from 'src/hooks/useIntersectionObserver'; // todo export from indx

import { Image_JSON, Paragraph_JSON } from 'src/types/types';

import './index.scss';

type Props = { images?: Image_JSON[]; paragraphs: Paragraph_JSON[] };

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
 * TODO: This is working well, however if this api
 * * sends too many images like 1 per paragraph then the image will be switching too often
 * * could have an image range like show image for paragraph 1 - 6
 * * OR only have one or two images per section
 * * OR scroll RHS area at slower speed to LHS
 * * OR just make sure that data fits the images
 *
 * * show img if { a, b, c }  show next image if { c, d, e }  show next img if { g, e }
 *
 *  * for desktop, it would be better if component had all paragraphs[] and all images[] so it can switch
 *  * images on the fly
 *
 */

function DesktopContentBlock({ paragraphs, images }: Props) {
  const [showImageIndex, setShowImageIndex] = useState(null);

  const [visibleIndices, setVisibleIndices] = useState<Set<string | null>>(new Set());

  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIntersect = useCallback((entry: ObserverEntry) => {
    const currentId = entry.target.getAttribute('data-index');
    if (entry.isIntersecting) {
      setVisibleIndices((prev) => new Set(prev).add(currentId));
    } else {
      setVisibleIndices((prev) => {
        const newSet = new Set(prev);
        newSet.delete(currentId);
        return newSet;
      });
    }
  }, []);

  const { observe, unobserve } = useIntersectionObserver(handleIntersect, {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1, // consider the element visible if at least 10% of it is visible
  });

  useEffect(() => {
    divRefs.current.forEach((div) => {
      if (div) observe(div);
    });
    return () => {
      divRefs.current.forEach((div) => {
        if (div) unobserve(div);
      });
    };
  }, [observe, unobserve]);

  useEffect(() => {
    console.log('🚀 ~ DesktopContentBlock ~ visibleIndices:', visibleIndices);
  }, [visibleIndices]);

  return (
    <div className='lg-viewport-content-container'>
      <div className='paragraphs-container'>
        {paragraphs &&
          paragraphs.map((paragraph, pIndex) => {
            //const contentItemKey = `${Math.random().toFixed(2)}-${pIndex}`;
            // const thisPragraphsImage = images && images.find((s) => s.id === paragraph.id);
            return (
              <div
                ref={(el) => {
                  divRefs.current[pIndex] = el;
                  if (el) observe(el); // Ensure we observe elements when they are set
                }}
                data-index={paragraph.id}
                key={pIndex}>
                {`Item ${pIndex + 1}`}
                <Paragraph>{paragraph.text}</Paragraph>
              </div>
            );
          })}
      </div>

      <div className='current-image-container'>
        {/* display current image */} <strong>IMG GOES HERE</strong>
      </div>
      {/* <Paragraph>{paragraphs}</Paragraph>
      {images && <ResponsiveImage src={images.href} alt={images.alt} caption={images.caption} />} */}
    </div>
  );
}

export default DesktopContentBlock;
