import React, { useState } from 'react';
import './FlexGrowShrink.scss';

function FlexGrowShrink(props: Props) {
  const { textItems } = props;
  const [state, setState] = useState('shrink');

  const Child = ({ text = 'shrink' }: ChildProps) => (
    <div className={`child-x ${state === 'shrink' ? 'shrink-x' : 'grow-x'}`}>{text}</div>
  );

  return (
    <section className='container'>
      <div className='container-x'>
        {textItems?.length && textItems.map((item, i) => <Child key={`${i}`} text={item} />)}
      </div>
      <form>
        <fieldset>
          <label>Flex Shrink</label>
          <input type='radio' id='shrink-x' onChange={() => handleValueChange('shrink')} checked={state === 'shrink'} />
        </fieldset>
        <fieldset>
          <label>Flex Grow</label>
          <input type='radio' id='grow-x' onChange={() => handleValueChange('grow')} checked={state === 'grow'} />
        </fieldset>
      </form>
    </section>
  );

  function handleValueChange(value: ChildProps['text']) {
    if (value === 'grow') {
      setState('grow');
    }
    if (value === 'shrink') {
      setState('shrink');
    }
  }
}

export default FlexGrowShrink;

export interface Props {
  textItems?: Array<ChildProps['text']>;
}

export interface ChildProps {
  text: 'grow' | 'shrink';
}
