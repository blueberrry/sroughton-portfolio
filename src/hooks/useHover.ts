import { useState } from 'react';
import { MouseEvent } from 'react';

export default function useHover<T extends HTMLElement>(): Returns<T> {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: MouseEvent<T>) => {
    console.log('🚀 ~ handleMouseEnter ~ e:', e);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: MouseEvent<T>) => {
    console.log('🚀 ~ handleMouseLeave ~ e:', e);
    setIsHovered(false);
  };

  return {
    isHovered,
    bind: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}

type Returns<T extends HTMLElement> = {
  isHovered: boolean;
  bind: {
    onMouseEnter: (e: MouseEvent<T>) => void;
    onMouseLeave: (e: MouseEvent<T>) => void;
  };
};
