import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BreadCrumbs } from './index';
import { MemoryRouter } from 'react-router-dom';
import { BREADCRUMB_ROOTS } from '../../consts'; // todo: make storybook recognise src/consts

const meta: Meta<typeof BreadCrumbs> = {
  title: 'Navigation/BreadCrumbs',
  component: BreadCrumbs,
  parameters: [],
  argTypes: {
    seperators: {
      control: 'boolean',
      name: 'Has Seperators?',
      description: 'Optionally apply seperator components between each breadcrumb item.',
    },
    pathnames: {
      control: 'object',
      name: 'Path Names',
      description: 'Should button span container width',
    },
    root: {
      control: 'select',
      name: 'Set Root Page',
      description: 'Change root page',
      options: BREADCRUMB_ROOTS,
    },
  },
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
    root: 'home',
  },
};

export const MultipleLocations: Story = {
  args: {
    seperators: true,
    pathnames: ['one', 'two', 'three', 'four'],
    root: 'home',
  },
};
