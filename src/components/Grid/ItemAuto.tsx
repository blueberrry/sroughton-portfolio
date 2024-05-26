import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useHover } from 'src/hooks';
import { AreaNames } from 'src/types/types';

export function ItemAuto({ theme = 'a', onClick, onHover, extraClasses, children }: ItemAutoProps) {
  /**
   * Grid item pseudo
   *
   *
   *
   * todo: darken element on hover
   * todo: selected item drop-shadow, filer blur, zoom
   * todo: other transitions
   * todo: handleClick
   *
   */

  const { isHovered, bind } = useHover<HTMLLIElement>();

  const isHoveredClass = isHovered ? `item-hovered-${theme}` : ``;

  useEffect(() => {
    if (onHover && isHovered) {
      onHover(theme);
    }
  }, [isHovered]);

  return (
    <li className={`item-auto ${classNames(isHoveredClass, extraClasses)} `} {...bind} onClick={onClick}>
      {children}
    </li>
  );
}

export type ItemAutoProps = {
  onHover?: (hvr: ItemAutoProps['theme']) => void;
  theme?: AreaNames;
  onClick?: () => void;
  extraClasses?: string[];
  children?: React.ReactNode;
};
