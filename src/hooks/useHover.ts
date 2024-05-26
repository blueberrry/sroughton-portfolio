import { useState } from 'react';
import { MouseEvent } from 'react';

function useHover<T extends HTMLElement>(): Returns<T> {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: MouseEvent<T>) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e: MouseEvent<T>) => {
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

export default useHover;
