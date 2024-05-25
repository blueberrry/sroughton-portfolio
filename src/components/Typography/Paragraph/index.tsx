import React, { PropsWithChildren, ReactElement, ReactNode, useEffect, useState } from 'react';
import { useClasses } from 'src/hooks/useClasses';
import { COMPONENT_STYLE_TYPES } from 'src/consts';
import { CompStyleTypeKeys, ParagraphChild } from 'src/types/types';

import './index.scss';

type Props = {
  type?: CompStyleTypeKeys;
  centered?: boolean;
  extraClasses?: string[];
  children: ParagraphChild | ParagraphChild[];
};

// todo: implement in other components that have defined child types
const isAllowedChild = (node: ReactNode): boolean => {
  // Ensure all children are one of the allowed types

  if (typeof node === 'string') return true;

  if (React.isValidElement(node)) {
    const { type } = node;
    return type === 'span' || type === 'a' || type === 'p';
  }

  return false;
};

function Paragraph({ type = 'primary', centered = false, extraClasses, children }: PropsWithChildren<Props>) {
  const [componentClasses, setComponentClasses] = useState(extraClasses ?? []);

  const pClasses = new Array(`${COMPONENT_STYLE_TYPES[type]}-paragraph`);

  useEffect(() => {
    if (centered) {
      setComponentClasses((prev) => (!prev ? ['centered'] : ['centered', ...prev]));
    }

    return () => {
      // Optionally clean up state
    };
  }, [centered, setComponentClasses]);

  useEffect(() => {
    if (extraClasses && extraClasses.length > 0) {
      setComponentClasses((prev) => (!prev ? extraClasses : [...extraClasses, ...prev]));
    }

    return () => {
      // Optionally clean up state
    };
  }, [extraClasses, setComponentClasses]);

  const { classes } = useClasses({ containerClasses: pClasses, extraClasses: componentClasses });

  const validateChildren = (children: ReactNode): void => {
    React.Children.forEach(children, (child) => {
      if (!isAllowedChild(child)) {
        // TODO: this is an anti-pattern, consider returning default fragment or something similar
        throw new Error('Invalid child element passed to the Paragraph component');
      }
      return <></>;
    });
  };

  // trying something new here
  try {
    validateChildren(children);
  } catch (e) {
    console.warn(e);
    return <></>;
  } finally {
    return <p className={`default ${classes}`}>{children}</p>;
  }
}

export default Paragraph;
