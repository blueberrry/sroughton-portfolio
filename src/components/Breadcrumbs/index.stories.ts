import type { Meta, StoryObj } from '@storybook/react';

import { BreadCrumbs } from './index';

const meta: Meta<typeof BreadCrumbs> = {
  title: 'Navigation/BreadCrumbs',
  component: BreadCrumbs,
  // ...
};

export default meta;

type Story = StoryObj<typeof BreadCrumbs>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click',
    background: 'red',
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  },
};
