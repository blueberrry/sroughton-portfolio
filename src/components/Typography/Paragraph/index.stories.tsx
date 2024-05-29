import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from './index';

import { COMPONENT_STYLE_TYPES } from 'src/consts';

// todo: style prop for primary/secondary styles (see root.scss)
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
    children:
      'Duis convallis convallis tellus id interdum velit laoreet. Amet venenatis urna cursus eget nunc scelerisque viverra. Vitae ultricies leo integer malesuada nunc vel risus. Proin sed libero enim sed faucibus turpis. Mattis nunc sed blandit libero volutpat sed cras ornare. Lobortis elementum nibh tellus molestie nunc non. Tempus egestas sed sed risus pretium. In nulla posuere sollicitudin aliquam ultrices. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children:
      'Duis convallis convallis tellus id interdum velit laoreet. Amet venenatis urna cursus eget nunc scelerisque viverra. Vitae ultricies leo integer malesuada nunc vel risus. Proin sed libero enim sed faucibus turpis. Mattis nunc sed blandit libero volutpat sed cras ornare. Lobortis elementum nibh tellus molestie nunc non. Tempus egestas sed sed risus pretium. In nulla posuere sollicitudin aliquam ultrices. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.',
  },
};
