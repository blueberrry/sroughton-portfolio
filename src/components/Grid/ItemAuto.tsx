import React, { useEffect } from 'react';
import classNames from 'classnames';
import useHover from 'src/hooks/useHover';
import { Colors, ThemeNames } from 'src/types/types';

export function ItemAuto({ color = 'a', onClick, onHover, extraClasses, children }: ItemAutoProps) {
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

  const isHoveredClass = isHovered ? `item-hovered-${color}` : ``;

  useEffect(() => {
    if (onHover && isHovered) {
      onHover(color);
    }
  }, [isHovered]);

  return (
    <li className={`item-auto ${classNames(isHoveredClass, extraClasses)} `} {...bind} onClick={onClick}>
      {children}
    </li>
  );
}

export type ItemAutoProps = {
  onHover?: (hvr: ItemAutoProps['color']) => void;
  color?: Colors;
  onClick?: () => void;
  extraClasses?: string[];
  children?: React.ReactNode;
};
