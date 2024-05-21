import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import ArticleList from './index';

export const ARTICLE_LIST_JSON = [
  {
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
        header: 'Using ur useState Hook',
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
  },
  {
    id: '2',
    title: 'JavaScript Article',
    subTitle: 'The latest JavaScript syntax',
    heroImage: { href: '', alt: '' },
    date: 1716311339999,
    tags: ['JavaScript', 'Web Development'],
    sections: [
      {
        header: 'The new JS',
        content: [
          {
            paragraph: 'Bob Boblaws law blog -- to enable state and side-effect management in functional components.',
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
  },
];
const meta: Meta<typeof ArticleList> = {
  title: 'Pages/ArticleList',
  component: ArticleList,
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

type Story = StoryObj<typeof ArticleList>;

export const Standard: Story = {
  args: {},
};
