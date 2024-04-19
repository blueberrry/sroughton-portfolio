import React, { useEffect } from 'react';
import classNames from 'classnames';
import useHover from 'src/hooks/useHover';
import { ThemeNames } from 'src/types/types';

export function ItemAuto({ type = 'primary', onClick, onHover, extraClasses, children }: ItemAutoProps) {
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

  const isHoveredClass = isHovered ? `item-hovered-${type}` : ``;

  useEffect(() => {
    if (onHover && isHovered) {
      onHover(type);
    }
  }, [isHovered]);

  return (
    <li className={`item-auto ${classNames(isHoveredClass, extraClasses)} `} {...bind} onClick={onClick}>
      {children}
    </li>
  );
}

export type ItemAutoProps = {
  onHover?: (hvr: ItemAutoProps['type']) => void;
  type?: ThemeNames;
  onClick?: () => void;
  extraClasses?: string[];
  children?: React.ReactNode;
};
