import classNames from 'classnames';
import { useEffect, useState } from 'react';

type UseClassesArgs = {
  containerClasses: string[];
  extraClasses: string[];
};

export const useClasses = ({ containerClasses, extraClasses }: UseClassesArgs) => {
  const [classString, setClassString] = useState<null | string>(null);

  useEffect(() => {
    let classes: string[] = [];

    if (containerClasses) {
      classes = [...classes, ...containerClasses];
    }

    if (extraClasses) {
      classes = [...classes, ...extraClasses];
    }

    if (classes.length > 0) {
      const mergedClasses = classNames(classes);
      setClassString(mergedClasses);
    }

    return () => {
      // optionally clean up state
    };
  }, [containerClasses, extraClasses, setClassString, classNames]);

  return { classes: classString ?? '' };
};
