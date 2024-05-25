import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import Article from './index';
import Section from '../Section/index';
import { Paragraph } from 'src/components/Typography';

import { COMPONENT_STYLE_TYPES } from '../consts';

const VARIANT_01_ARTICLE_JSON = {
  id: '1',
  title: 'Understanding React Hooks',
  subTitle: 'A deep dive into useState and useEffect',
  heroImage: { href: '', alt: '' },
  date: +new Date(), // todo: new Date() should be converted in parent
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
    id: VARIANT_01_ARTICLE_JSON.id,
    type: 'primary',
    title: VARIANT_01_ARTICLE_JSON.title,
    subTitle: VARIANT_01_ARTICLE_JSON.subTitle,
    date: VARIANT_01_ARTICLE_JSON.date, // todo: from api
    tags: VARIANT_01_ARTICLE_JSON.tags,
    // todo: better way to include children IE dummy text file stored elsewhere?
    children: (
      <>
        {VARIANT_01_ARTICLE_JSON.sections.map((section: any) => {
          return (
            <Section title={section.header}>
              {section.content.map((cont: any) => {
                return (
                  <>
                    {cont.images.before && <img src={cont.images.before.href} alt={cont.images.before.alt} />}
                    <Paragraph>{cont.paragraph}</Paragraph>
                    {cont.images.after && <img src={cont.images.after.href} alt={cont.images.after.alt} />}
                  </>
                );
              })}
            </Section>
          );
        })}
      </>
    ),
  },
};
