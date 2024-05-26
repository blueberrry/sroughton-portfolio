import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import ContentBlock from './index';

const meta: Meta<typeof ContentBlock> = {
  title: 'Layouts/ContentBlock',
  component: ContentBlock,
  parameters: [],
  argTypes: {
    // type: {
    //   control: 'select',
    //   name: 'Paragraph Style Type',
    //   description: 'Switch between articles styles (main or subtitle)',
    //   options: Object.keys(COMPONENT_STYLE_TYPES),
    // },
    // centered: {
    //   control: 'boolean',
    //   name: 'Center title',
    //   description: 'Left or centered',
    // },
    // extraClasses: {
    //   control: 'object',
    //   name: 'Extra CSS Classes',
    //   description: 'Date the article was written',
    // },
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

type Story = StoryObj<typeof ContentBlock>;

export const WithImage: Story = {
  args: {
    paragraph:
      'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
    image: {
      href: 'https://i.pinimg.com/564x/40/32/8d/40328d8c8e8ddb8da932c25858c72c04.jpg',
      alt: 'useState Hook Example 1',
    },
  },
};

export const WithoutImage: Story = {
  args: {
    paragraph:
      'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
  },
};
