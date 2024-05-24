import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from './index';
import { COMPONENT_STYLE_TYPES } from 'src/consts';

// todo: potentially prop for primary/secondary styles (see root.scss)
// import { COMPONENT_STYLE_TYPES } from '../consts';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: [],
  argTypes: {
    type: {
      control: 'select',
      name: 'Paragraph Style Type',
      description: 'Switch between articles styles (main or subtitle)',
      options: Object.keys(COMPONENT_STYLE_TYPES),
    },
    centered: {
      control: 'boolean',
      name: 'Center title',
      description: 'Left or centered',
    },
    extraClasses: {
      control: 'object',
      name: 'Extra CSS Classes',
      description: 'Date the article was written',
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

type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Some p text',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Some p text',
  },
};
