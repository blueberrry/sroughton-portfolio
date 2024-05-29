import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { TEST_IMG_SRCS } from 'src/consts';
import ArticleCollection from './index';

import { Article_JSON } from 'src/types/types';

// TODO: Assets served from server so will need to configure this
export const ARTICLE_COLLECTION_JSON: Article_JSON[] = [
  {
    id: '1',
    title: 'Understanding React Hooks',
    tagline: 'A deep dive into useState and useEffect',
    heroImage: { src: '', alt: '', srcSet: { mobile: null, tablet: null, desktop: null } },
    date: +new Date(),
    tags: ['React', 'Hooks', 'JavaScript', 'Web Development'],
    sections: [
      {
        id: 'section1',
        header: 'Introduction',
        paragraphs: [
          {
            id: '1',
            text: 'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
          },
          {
            id: '2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Purus sit amet luctus venenatis. Erat velit scelerisque in dictum. Netus et malesuada fames ac. Suspendisse ultrices gravida dictum fusce. A condimentum vitae sapien pellentesque. Id neque aliquam vestibulum morbi blandit cursus risus. Mattis pellentesque id nibh tortor id. Eu sem integer vitae justo. Suspendisse faucibus interdum posuere lorem ipsum dolor. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Lobortis elementum nibh tellus molestie nunc non. Faucibus purus in massa tempor nec feugiat nisl pretium. Semper auctor neque vitae tempus quam.',
          },
          {
            id: '3',
            text: 'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
          },
          {
            id: '4',
            text: 'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
          },
          {
            id: '5',
            text: 'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
          },
        ],
        images: [
          {
            id: '2',
            src: TEST_IMG_SRCS.one,
            alt: '',
            srcSet: { mobile: null, tablet: null, desktop: null },
          },
          {
            id: '4',
            src: 'https://i.pinimg.com/564x/40/32/8d/40328d8c8e8ddb8da932c25858c72c04.jpg',
            alt: '',
            srcSet: { mobile: null, tablet: null, desktop: null },
          },
        ],
      },

      {
        id: 'section2',
        header: 'Introduction',
        paragraphs: [
          {
            id: '1',
            text: 'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
          },
          {
            id: '2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Purus sit amet luctus venenatis. Erat velit scelerisque in dictum. Netus et malesuada fames ac. Suspendisse ultrices gravida dictum fusce. A condimentum vitae sapien pellentesque. Id neque aliquam vestibulum morbi blandit cursus risus. Mattis pellentesque id nibh tortor id. Eu sem integer vitae justo. Suspendisse faucibus interdum posuere lorem ipsum dolor. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Lobortis elementum nibh tellus molestie nunc non. Faucibus purus in massa tempor nec feugiat nisl pretium. Semper auctor neque vitae tempus quam.',
          },
          {
            id: '3',
            text: 'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
          },
          {
            id: '4',
            text: 'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
          },
          {
            id: '5',
            text: 'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
          },
        ],
        images: [
          {
            id: '1',
            src: TEST_IMG_SRCS.two,
            alt: '',
            caption:
              ' Libero enim sed faucibus turpis in eu mi. Laoreet id donec ultrices tincidunt arcu non sodales. Sed blandit libero volutpat sed cras ornare arcu. Accumsan lacus vel facilisis volutpat est velit.',
            srcSet: { mobile: null, tablet: null, desktop: null },
          },
          {
            id: '2',
            src: TEST_IMG_SRCS.three,
            alt: '',
            srcSet: { mobile: null, tablet: null, desktop: null },
          },
          {
            id: '4',
            src: TEST_IMG_SRCS.four,
            alt: '',
            srcSet: { mobile: null, tablet: null, desktop: null },
          },
        ],
      },
    ],
  },
];

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
