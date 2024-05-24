import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    if (config.resolve) {
      config.resolve.modules = [
        path.resolve(__dirname, '../src'), // Add 'src' to the module resolution paths
        'node_modules',
      ];

      config.resolve.alias = {
        ...config.resolve.alias,
        src: path.resolve(__dirname, '../src'), // Add alias for 'src'
      };
    }

    // Make whatever fine-grained changes you need
    if (config.module) {
      if (config.module.rules) {
        config.module?.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../src'),
        });

        // Return the altered config
        return config;
      }
    }
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
