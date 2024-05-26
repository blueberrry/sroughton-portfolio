import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import ResponsiveImage from './index';

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Images',
  component: ResponsiveImage,
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

type Story = StoryObj<typeof ResponsiveImage>;

export const Standard: Story = {
  args: {
    src: 'https://i.pinimg.com/564x/ef/68/6f/ef686f67f26c1bacb1dd3b9b1a18e8b7.jpg',
    alt: 'Humanoid robot with futuristic butterfly style drone wings',
    caption: "The CX 8000 Robot with it's large drone wings",
    sourceSet: {
      phone:
        'https://static.wikia.nocookie.net/palworld/images/4/4d/Beautiful_Flower_icon.png/revision/latest?cb=20240122230531',
      tablet: 'https://www.1800flowers.com/blog/wp-content/uploads/2015/11/purple-flower.jpg',
      desktop: 'https://media.houseandgarden.co.uk/photos/618946e38373470f8394e277/master/w_1600%2Cc_limit/251-8.jpg',
    },
  },
};

export const LongCaption: Story = {
  args: {
    src: 'https://i.pinimg.com/564x/ef/68/6f/ef686f67f26c1bacb1dd3b9b1a18e8b7.jpg',
    alt: 'Humanoid robot with futuristic butterfly style drone wings',
    caption:
      'Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Varius vel pharetra vel turpis nunc eget lorem dolor. Sapien faucibus et molestie ac feugiat sed lectus. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Netus et malesuada fames ac turpis.',
    sourceSet: { phone: '', tablet: '', desktop: '' },
  },
};
