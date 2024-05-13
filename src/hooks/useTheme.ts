import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'src/context/ThemeContext';

export function useTheme() {
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return {
    theme,
    changeTheme,
  };
} 
