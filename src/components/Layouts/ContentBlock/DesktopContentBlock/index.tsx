import React, { useCallback, useEffect, useRef, useState } from 'react';
//import { Paragraph, ResponsiveImage } from 'src/components';
import ResponsiveImage from '../../../ResponsiveImage';
import { Paragraph } from '../../../Typography';
import useIntersectionObserver, { ObserverEntry } from 'src/hooks/useIntersectionObserver'; // todo export from indx

import { Image_JSON, Paragraph_JSON } from 'src/types/types';

import './index.scss';

type Props = { paragraphs: Paragraph_JSON[]; images?: Image_JSON[]; reversed?: boolean };

/**
 * * List of paragraphs one one side, fixed images on the other, images change as user scrolls.
 * @param {Object} props - Component props
 * @param {Paragraph_JSON[]} props.paragraphs - Array of paragraphs with ids
 * @param {Image_JSON[]} props.images - Array of image details/srcs with ids
 *
 * @returns {JSX.Element}
 *
 * TODO: Taller screens will stop this from working if the paragraphs aren't scrolling - especially if usr has portrait tablet or portrait desktop
 * TODO: switch between mobile/desktop components
 * TODO: Render alongside on desktop/tablet/fold
 * TODO: FIXME if too many images, it will only flip between the final paragraphs images
 * TODO: Animate in images
 * TODO: Zigzag pattern (optionally switch image/text sides)
 * TODO: Optionally highlight paragraph/test and animate a line to glow up the img border
 *
 * * *** A solution could be adding plenty of spacing around the title (for the first section at least)
 * * *** Also adding code blocks could spread it out a fair bit (unless including them in RHS)
 * * sends too many images like 1 per paragraph then the image will be switching too often
 * * could have an image range like show image for paragraph 1 - 6
 * * OR only have one or two images per section
 * * OR scroll RHS area at slower speed to LHS
 * * OR just make sure that data fits the images
 *
 *
 */

function DesktopContentBlock({ paragraphs, images, reversed = false }: Props) {
  const [currentImage, setCurrentImage] = useState<Image_JSON | null>(null);

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
    if (images && images.length > 0) {
      const imagesIds = images?.map((img) => img.id);

      if (imagesIds && imagesIds.length > 0) {
        imagesIds.forEach((id) => {
          if (visibleIndices.has(id)) {
            const imageToShow = images.find((img) => img.id === id);
            imageToShow && setCurrentImage(imageToShow);
          }
        });
      }
    }
  }, [visibleIndices, images]);

  return (
    <div className={`lg-viewport-content-container ${reversed ? 'reversed' : ''}`}>
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
                <Paragraph>{paragraph.text}</Paragraph>
              </div>
            );
          })}
      </div>

      <div className='current-image-container'>
        {currentImage && (
          <ResponsiveImage
            src={currentImage?.src}
            alt={currentImage?.alt}
            caption={currentImage?.caption}
            sourceSet={currentImage?.srcSet}
          />
        )}
      </div>
    </div>
  );
}

export default DesktopContentBlock;
