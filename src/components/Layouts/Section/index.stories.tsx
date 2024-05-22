import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Section from './index';
import { Paragraph } from 'src/components/Typography';

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
    children: (
      <>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Laoreet sit amet cursus sit amet. Nunc eget lorem dolor sed viverra. Scelerisque fermentum dui
          faucibus in ornare. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Faucibus scelerisque
          eleifend donec pretium vulputate sapien nec sagittis. Netus et malesuada fames ac. Nisi vitae suscipit tellus
          mauris a. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Amet aliquam id diam
          maecenas ultricies. Augue neque gravida in fermentum et sollicitudin ac orci.
        </Paragraph>

        <Paragraph>
          Nullam vehicula ipsum a arcu. Sed viverra tellus in hac habitasse platea dictumst. Est ante in nibh mauris
          cursus. Eget mi proin sed libero. Dictum varius duis at consectetur lorem donec massa sapien. Et malesuada
          fames ac turpis egestas integer eget aliquet. Cras sed felis eget velit aliquet sagittis id consectetur purus.
          Dolor sit amet consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis. Integer quis auctor
          elit sed vulputate mi. Aenean vel elit scelerisque mauris pellentesque. Enim nulla aliquet porttitor lacus
          luctus. Vitae sapien pellentesque habitant morbi tristique senectus et. Varius morbi enim nunc faucibus a
          pellentesque sit amet. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Sit amet consectetur
          adipiscing elit ut aliquam purus. Sed viverra tellus in hac habitasse. Viverra maecenas accumsan lacus vel
          facilisis volutpat est. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Habitant morbi
          tristique senectus et netus et malesuada.
        </Paragraph>
        <Paragraph>
          Vel quam elementum pulvinar etiam non quam. Tellus cras adipiscing enim eu turpis egestas pretium aenean
          pharetra. Est ullamcorper eget nulla facilisi. Netus et malesuada fames ac turpis egestas maecenas pharetra
          convallis. Amet tellus cras adipiscing enim eu. Sed viverra ipsum nunc aliquet bibendum enim facilisis
          gravida. Eleifend quam adipiscing vitae proin sagittis. Vestibulum lectus mauris ultrices eros in cursus
          turpis. Suspendisse ultrices gravida dictum fusce ut placerat. Malesuada proin libero nunc consequat interdum
          varius sit amet. Nibh sit amet commodo nulla facilisi nullam vehicula. Fusce ut placerat orci nulla
          pellentesque dignissim enim sit.
        </Paragraph>
      </>
    ),
  },
};
