import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './index.scss';

export function GridContainer({ presetName = 'grid_3_3', extraClasses = [''], children }: GridContainerProps) {
  // todo: row props
  // todo: col props
  // todo: add defined grid component container (optional at this point)

  const { gridClasses } = useGridContainerClasses({
    presetName,
    defaultClasses: ['grid-container'],
    extraClasses,
  });

  return <ul className={gridClasses}>{children}</ul>;
}

type GridContainerProps = {
  presetName?: GridPresetName;
  extraClasses?: string[];
  children?: React.ReactNode;
};

/**
 * Hook used with grid-container
 * sets optional optional grid areas
 *
 */

/**
 * Generates class names for a Grid Container component
 * Sets default class names from Grid-Container (or pass for custom if unused)
 * If composed grid then sets relevant component class name
 * If extra classes, add extra classes
 * Copy into one array
 * Return merged classes by calling classnames
 * todo: hook logic may be unneeded - investigate
 */

export const useGridContainerClasses = ({
  presetName,
  defaultClasses = ['grid-container'],
  extraClasses = [''],
}: UseGridContainerClassesProps) => {
  const [definedGridClass, setDefinedClasses] = useState<string>(''); // './index.scss' - container grid-area: ..

  // If predefined config - eg button grid
  useEffect(() => {
    if (presetName) {
      setDefinedClasses(GRID_PRESETS_CONFIG[presetName]);
    } else {
      console.info('-- add defined grid classes');
    }
  }, [presetName, setDefinedClasses]);

  const gridClasses = classNames([definedGridClass, ...defaultClasses, ...extraClasses]);

  return {
    gridClasses,
  };
};

const GRID_PRESETS_CONFIG = { grid_3_3: 'grid-3-3', grid2: 'grid-2' };

type GridPresetName = keyof typeof GRID_PRESETS_CONFIG;

type UseGridContainerClassesProps = {
  presetName?: GridPresetName;
  defaultClasses?: string[];
  extraClasses?: string[];
  activeItem?: string;
};
