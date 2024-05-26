import React from 'react';
import { useClasses } from 'src/hooks';
import { TitleStyleTypes } from 'src/types/types';

import './index.scss';

type Props = {
  type?: TitleStyleTypes;
  text: string;
  tagline?: string;
  extraClasses?: string[];
  centered?: boolean;
};

function Title({ type = 'main', text = '', tagline, centered = false, extraClasses = [] }: Props) {
  const { classes } = useClasses({
    containerClasses: [],
    extraClasses: [...extraClasses, centered ? 'centered' : ''],
  });

  const configHeaderTag = () => {
    switch (type) {
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
          <span role='header' className='default'>
            {text}
          </span>
        ); // Default renders span
    }
  };

  return (
    <header className='title'>
      {configHeaderTag()}
      {tagline && <span className='tagline'>{tagline}</span>}
    </header>
  );
}

export default Title;
