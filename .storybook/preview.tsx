import React, { useContext, useEffect } from 'react';
import type { Preview } from '@storybook/react';
import ThemeProvider, { ThemeContext } from '../src/context/ThemeContext';

import '../src/styles/modern-normalize.css';
import '../src/styles/theme/_colors.scss';
import '../src/styles/theme/_themes.scss';
import '../src/root.scss';

type xProps = {
  children?: React.ReactNode;
};

const StoryWrapper = ({ children }: xProps) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTheme('night');
        }}>
        Night theme
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          changeTheme('mystic');
        }}>
        Mystic theme
      </button>

      <br />
      <br />

      {children}
    </>
  );
};

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
      return (
        <ThemeProvider initialTheme={'purple-hills'}>
          <StoryWrapper>
            <Story />
          </StoryWrapper>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
