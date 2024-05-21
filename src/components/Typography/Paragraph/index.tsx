import React, { useEffect, useState } from 'react';
import { useClasses } from 'src/hooks/useClasses';
import { COMPONENT_STYLE_TYPES } from 'src/consts';
import { CompStyleTypeKeys } from 'src/types/types';

type Props = {
  type?: CompStyleTypeKeys;
  centered?: boolean;
  extraClasses?: string[];
};

function Paragraph({ type = 'primary', centered = false, extraClasses }: Props) {
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

  return <p className={`default ${classes}`}>Paragraph</p>;
}

export default Paragraph;
