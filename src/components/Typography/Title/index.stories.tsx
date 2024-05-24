import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import Title from './index';
import { TITLE_STYLE_TYPES } from 'src/consts';

// todo: potentially prop for primary/secondary styles (see root.scss)
// import { COMPONENT_STYLE_TYPES } from '../consts';

const meta: Meta<typeof Title> = {
  title: 'Typography/Title',
  component: Title,
  parameters: [],
  argTypes: {
    type: {
      control: 'select',
      name: 'Paragraph Style Type',
      description: 'Switch between articles styles (main or subtitle)',
      options: TITLE_STYLE_TYPES,
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

type Story = StoryObj<typeof Title>;

export const Main: Story = {
  args: {
    type: 'main',
    text: 'Magna ac Placerat Vestibulum Lectus Mauris Ultrices Eros In',
  },
};

export const Sub: Story = {
  args: {
    type: 'sub',
    text: 'Sit Amet Aliquam id Diam Maecenas Ultricies mi Eget',
  },
};
