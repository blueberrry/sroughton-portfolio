import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import useHover from 'src/hooks/useHover';

export function DefinedItem({ name = 'primary', onClick, onHover, extraClasses, children }: ItemAutoProps) {
  /**
   * Defined grids with names only

   */

  const { isHovered, bind } = useHover();

  const isHoveredClass = isHovered ? `item-hovered-${name}` : ``;

  useEffect(() => {
    if (onHover) {
      if (isHovered) {
        onHover(name);
      }
    }
  }, [isHovered]);

  return <div>{children}</div>;
}

export type ItemAutoProps = {
  onHover?: (hvr: ItemAutoProps['name']) => void; // todo: move to ts file
  name?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  extraClasses?: string[];
  children?: React.ReactNode;
};
