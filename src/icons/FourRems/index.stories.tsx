import type { Meta, StoryObj } from '@storybook/react';

import FourRems from '.';
import { SVG_IMAGES, SVG_PATHS, SVG_TEXT } from './consts';

const meta: Meta<typeof FourRems> = {
  title: 'Icons',
  component: FourRems,
};

export default meta;

type Story = StoryObj<typeof FourRems>;

export const SvgImage: Story = {
  args: {
    name: 'img_crab',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(SVG_IMAGES),
      name: 'Svg Image Elements',
      description: 'Choose an SVG image element from the list',
    },
  },
};

export const SvgText: Story = {
  args: {
    name: 'text_articles',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(SVG_TEXT),
      name: 'Svg Text Elements',
      description: 'Choose an SVG text element from the list',
    },
  },
};

export const SvgPaths: Story = {
  args: {
    name: 'paths_projects',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(SVG_PATHS),
      name: 'Svg Path Elements',
      description: 'Choose an SVG text element from the list',
    },
  },
};
