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
    pathnames: ['one', 'two'],
    root: 'home',
  },
};

export const MultipleLocations: Story = {
  args: {
    pathnames: ['one', 'two', 'three', 'four'],
    root: 'home',
  },
};

export const LongLinkText: Story = {
  args: {
    pathnames: ['projects', 'new-projects', 'elaborate-long-article-title', 'next-title', 'even nexter title'],
    root: 'home',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '20rem', height: '100vh', border: '1px solid purple' }}>
        <Story />
      </div>
    ),
  ],
};

export const RootRouteOnly: Story = {
  args: {
    pathnames: [],
    root: 'home',
  },
};

export const SingleRouteOnly: Story = {
  args: {
    pathnames: ['projects'],
    root: null,
  },
};
