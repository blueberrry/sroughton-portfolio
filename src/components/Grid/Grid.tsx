import React from 'react';
import './Grid.scss';

export function GridContainer({ children }: { children?: React.ReactNode }) {
  return <div className='grid-container'>{children}</div>;
}

export function GridItemAuto({ children }: { children?: React.ReactNode }) {
  return <div className='grid-item-auto'>{children}</div>;
}
