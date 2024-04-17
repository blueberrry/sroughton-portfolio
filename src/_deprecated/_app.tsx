import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 *  @deprecated may switch to calling multiple components throughout website
 */

/*

const components = {
  comp1: (props: ComponentItem['props']) => <ExampleComponent {...props} />,
  comp2: (props: FlexGrowShrinkProps) => <FlexGrowShrink {...props} />,
};

//ts-ignore
const getComponent = (name: ComponentItem['name'], props: any): ReactNode => {
  //ts-ignore
  return components[name](props);
};

export function renderComponents(compArr: ComponentItem[]) {
  if (compArr?.length) {
    compArr.forEach((comp) => {
      const domNode: HTMLElement | null = document.getElementById(comp.id);

      if (domNode) {
        const root = createRoot(domNode);
        root.render(getComponent(comp.name, comp.props));
      }
    });
  } else {
    console.log('No components to render');
  }
}

type CompName = keyof typeof components;

interface ComponentItem {
  id: string;
  name: CompName;
  props?: any; //todo: is this correct?
}

*/

// renderComponents(testComponentArray);

// ? create dom-nodes -- done in index.html
// create root instances
// array of components to render
// component properties if needed
//
