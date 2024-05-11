import React, { useContext, useEffect } from 'react';
import type { Preview } from '@storybook/react';
import ThemeProvider, { ThemeContext } from '../src/context/ThemeContext';

import '../src/styles/modern-normalize.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const { theme, changeTheme } = useContext(ThemeContext);

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
