import React from 'react';
import { useClasses } from 'src/hooks/useClasses';

import './index.scss';

type Props = {
  type?: 'default' | 'main' | 'sub' | 'medium' | 'medium-sub' | 'small' | 'small-sub';
  extraClasses?: string[];
  text: string;
};

function Title({ text = '', type = 'main', extraClasses = [] }: Props) {
  const { classes } = useClasses({ containerClasses: [], extraClasses });

  switch (
    type // Remove unnecessary curly braces from switch statement
  ) {
    case 'main':
      return <h1 className={`main-title ${classes}`}>{text}</h1>;
    case 'sub':
      return <h2 className={`sub-title ${classes}`}>{text}</h2>;
    case 'medium':
      return <h3 className={`medium-title ${classes}`}>{text}</h3>;
    case 'medium-sub':
      return <h4 className={`medium-sub-title ${classes}`}>{text}</h4>;
    case 'small':
      return <h5 className={`small-title ${classes}`}>{text}</h5>;
    case 'small-sub':
      return <h6 className={`small-sub-title ${classes}`}>{text}</h6>;
    default: // Default if type undefined
      return (
        <div role='header' className='default'>
          {text}
        </div>
      ); // Changed to div for a default case
  }
}

export default Title;
