import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { TEST_IMG_SRCS } from 'src/consts';
import ArticleCollection from './index';

import { Article_JSON } from 'src/types/types';

// TODO: Assets served from server so will need to configure this

const meta: Meta<typeof ArticleCollection> = {
  title: 'Pages/ArticleCollection',
  component: ArticleCollection,
  parameters: [],
  argTypes: {},
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

type Story = StoryObj<typeof ArticleCollection>;

export const Standard: Story = {
  args: {},
};
