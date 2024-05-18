import React, { PropsWithChildren, createContext, useCallback, useState } from 'react';
import { ThemeNames } from 'src/types/types';

interface ContextProps {
  theme: ThemeNames | null;
  changeTheme: (theme: ContextProps['theme']) => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: null,
  changeTheme: () => {},
});

interface Props {
  initialTheme?: ThemeNames;
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ initialTheme, children }) => {
  // const initTheme = initial ? initial : 'default';
  const [theme, setTheme] = useState<ThemeNames | null>(initialTheme ?? 'default');

  const changeThemeHandler = (theme: ThemeNames) => {
    if (theme) {
      setTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: changeThemeHandler,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
