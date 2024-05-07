import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BreadCrumbs } from './index';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof BreadCrumbs> = {
  title: 'Navigation/BreadCrumbs',
  component: BreadCrumbs,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof BreadCrumbs>;

export const TwoLocations: Story = {
  args: {
    seperators: true,
    pathnames: ['one', 'two'],
  },
};

export const ArbitraryLocations: Story = {
  args: {
    seperators: true,
    pathnames: [],
  },
};
