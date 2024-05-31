import { useState, useEffect } from 'react';
import _ from 'lodash';

import { BreakpointsTypes, DimensionsType } from 'src/types/types';
import { BREAKPOINTS_MAX } from 'src/consts';

function useWindowSize(): { windowSize: DimensionsType; breakpoint: BreakpointsTypes } {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<DimensionsType>({
    width: null,
    height: null,
  });

  const [breakpoint, setBreakpoint] = useState<BreakpointsTypes>('tablet');

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = _.debounce(() => {
      // Set window width/height to state

      let bp = 'tablet' as BreakpointsTypes;

      if (windowSize.width) {
        if (windowSize.width < BREAKPOINTS_MAX.phone) {
          bp = 'small';
        } else if (windowSize.width < BREAKPOINTS_MAX.tablet) {
          bp = 'phone';
        } else if (windowSize.width < BREAKPOINTS_MAX.desktop) {
          bp = 'tablet';
        } else {
          bp = 'desktop';
        }

        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      if (bp) {
        setBreakpoint(bp);
      }
    });

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowSize, setBreakpoint]); // Empty array ensures that effect is only run on mount and unmount

  return { windowSize, breakpoint };
}

export default useWindowSize;
