import React from 'react';
import './index.scss';

type Props = {
  type?: 'default' | 'main' | 'sub' | 'medium' | 'medium-sub' | 'small' | 'small-sub'; //todo
  text: string;
};

export function Title({ text = '', type = 'main' }: Props) {
  switch (
    type // Remove unnecessary curly braces from switch statement
  ) {
    case 'main':
      return <h1 className='main-title'>{text}</h1>;
    case 'sub':
      return <h2 className='sub-title'>{text}</h2>;
    case 'medium':
      return <h3 className='medium-title'>{text}</h3>;
    case 'medium-sub':
      return <h4 className='medium-sub-title'>{text}</h4>;
    case 'small':
      return <h5 className='small-title'>{text}</h5>;
    case 'small-sub':
      return <h6 className='small-sub-title'>{text}</h6>;
    default: // Default if type undefined
      return (
        <div role='header' className='default'>
          {text}
        </div>
      ); // Changed to div for a default case
  }
}
