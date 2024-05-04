import React, { createContext, useState } from 'react';
import { ThemeNames } from 'src/types/types';

interface ContextProps {
  theme: ThemeNames;
  changeTheme: (theme: ContextProps['theme']) => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: 'default',
  changeTheme: () => {},
});

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeNames>('default');

  const changeThemeHandler = (theme: ThemeNames) => {
    if (theme) {
      setTheme(theme);
    } else console.warn('no theme/unrecognised theme');
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
