import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Article from './index';

import { COMPONENT_STYLE_TYPES } from '../consts';

const DUMMY_JSON = {
  id: '1',
  title: 'Understanding React Hooks',
  subTitle: 'A deep dive into useState and useEffect',
  heroImage: { href: '', alt: '' },
  date: 1716311335392,
  tags: ['React', 'Hooks', 'JavaScript', 'Web Development'],
  sections: [
    {
      header: 'Introduction',
      content: [
        {
          paragraph:
            'React Hooks were introduced in React 16.8 to enable state and side-effect management in functional components.',
          images: {
            before: null,
            after: {
              href: 'https://example.com/useState1.png',
              alt: 'useState Hook Example 1',
            },
          },
        },
      ],
    },
    {
      header: 'useState Hook',
      content: [
        {
          paragraph: 'The useState hook allows you to add state to functional components.',
          images: {
            before: {
              href: 'https://example.com/useState1.png',
              alt: 'useState Hook Example 1',
            },
            after: {
              href: 'https://example.com/useState1.png',
              alt: 'useState Hook Example 1',
            },
          },
        },
        {
          paragraph: 'Example usage:',
          images: {
            before: {
              href: 'https://example.com/useState1.png',
              alt: 'useState Hook Example 1',
            },
            after: null,
          },
        },
        {
          paragraph: '```javascript\nconst [count, setCount] = useState(0);\n```',
          images: { before: null, after: null },
        },
      ],
    },
  ],
};

const meta: Meta<typeof Article> = {
  title: 'Layouts/Article',
  component: Article,
  parameters: [],
  argTypes: {
    type: {
      control: 'select',
      name: 'Article style type',
      description: 'Switch between articles styles (primary/secondary)',
      options: Object.keys(COMPONENT_STYLE_TYPES),
    },
    title: {
      control: 'text',
      name: 'Article Title',
      description: 'Main article title <h3>',
    },
    date: {
      control: 'date',
      name: 'Article Date',
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

type Story = StoryObj<typeof Article>;

export const Standard: Story = {
  args: {
    type: 'primary',
    title: DUMMY_JSON.id,
    date: new Date(), // todo: from api
    tags: DUMMY_JSON.tags,
    // todo: better way to include children IE dummy text file stored elsewhere?
    children: <>{/*TODO: Content component to map before/after images with each paragraph*/}</>,
  },
};
