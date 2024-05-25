import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import { Article, Section, Paragraph, ResponsiveImage } from 'src/components';

import { COMPONENT_STYLE_TYPES } from '../consts';

import { Article_JSON, SectionContent_JSON, Section_JSON } from 'src/types/types';

import { ARTICLE_COLLECTION_JSON } from 'src/views/pages/ArticleCollection/index.stories';

const VARIANT_01_ARTICLE_JSON = ARTICLE_COLLECTION_JSON[0] as Article_JSON;

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
    subTitle: VARIANT_01_ARTICLE_JSON.tagline,
    date: VARIANT_01_ARTICLE_JSON.date, // todo: from api
    tags: VARIANT_01_ARTICLE_JSON.tags,
    // todo: better way to include children IE dummy text file stored elsewhere?
    children: (
      <>
        {VARIANT_01_ARTICLE_JSON.sections.map((section: Section_JSON) => {
          return (
            <Section title={section.header}>
              {section.content.map((cont, index) => {
                return (
                  <React.Fragment key={`${Math.random().toFixed(2)}-${index}`}>
                    {cont.images.before && (
                      <ResponsiveImage src={cont.images.before.href} alt={cont.images.before.alt} />
                    )}
                    <Paragraph>{cont.paragraph}</Paragraph>
                    {cont.images.after && <ResponsiveImage src={cont.images.after.href} alt={cont.images.after.alt} />}
                  </React.Fragment>
                );
              })}
            </Section>
          );
        })}
      </>
    ),
  },
};
