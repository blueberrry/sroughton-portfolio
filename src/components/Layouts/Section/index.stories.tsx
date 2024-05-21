import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Section from './index';
import { MemoryRouter } from 'react-router-dom';
import { COMPONENT_STYLE_TYPES } from '../consts';

const meta: Meta<typeof Section> = {
  title: 'Layouts/Section',
  component: Section,
  parameters: [],
  argTypes: {
    type: {
      control: 'select',
      name: 'Section Style Type',
      description: 'Switch between section styles (primary/secondary)',
      options: Object.keys(COMPONENT_STYLE_TYPES),
    },
    title: {
      control: 'text',
      name: 'Section Title',
      description: 'Main section title <h3>',
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

type Story = StoryObj<typeof Section>;

export const StandardSection: Story = {
  args: {
    type: 'primary',
    title: 'Section Title Number One',
    // todo: better way to include children IE dummy text file stored elsewhere?
    children: <>{'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}</>,
  },
};
