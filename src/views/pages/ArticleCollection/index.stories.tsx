import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import ArticleCollection from './index';

// TODO: Assets served from server so will need to configure this
export const ARTICLE_COLLECTION_JSON = [
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
              'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
            images: {
              before: null,
              after: null,
            },
          },
          {
            paragraph:
              'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
            images: {
              before: null,
              after: null,
            },
          },
          {
            paragraph:
              'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
            images: {
              before: null,
              after: null,
            },
          },
          {
            paragraph:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Purus sit amet luctus venenatis. Erat velit scelerisque in dictum. Netus et malesuada fames ac. Suspendisse ultrices gravida dictum fusce. A condimentum vitae sapien pellentesque. Id neque aliquam vestibulum morbi blandit cursus risus. Mattis pellentesque id nibh tortor id. Eu sem integer vitae justo. Suspendisse faucibus interdum posuere lorem ipsum dolor. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Lobortis elementum nibh tellus molestie nunc non. Faucibus purus in massa tempor nec feugiat nisl pretium. Semper auctor neque vitae tempus quam.',
            images: {
              before: null,
              after: {
                href: 'https://i.pinimg.com/564x/f1/5d/19/f15d19da1aef363441d11bc4fafa68d5.jpg',
                alt: 'useState Hook Example 1',
              },
            },
          },
          {
            paragraph:
              'Aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt id aliquet risus feugiat in ante metus dictum at. Eu consequat ac felis donec et odio pellentesque diam. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Accumsan lacus vel facilisis volutpat est. Odio facilisis mauris sit amet massa vitae tortor. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Pharetra sit amet aliquam id diam. Vestibulum lorem sed risus ultricies.',
            images: {
              before: null,
              after: {
                href: 'https://i.pinimg.com/564x/ef/68/6f/ef686f67f26c1bacb1dd3b9b1a18e8b7.jpg',
                alt: 'useState Hook Example 1',
              },
            },
          },
          {
            paragraph:
              'Lectus quam id leo in vitae. Cursus metus aliquam eleifend mi in nulla posuere. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nunc sed velit dignissim sodales ut eu sem integer. Sem et tortor consequat id porta nibh venenatis cras sed. Et netus et malesuada fames ac turpis egestas integer. Quisque sagittis purus sit amet volutpat consequat. Praesent elementum facilisis leo vel fringilla. Lectus urna duis convallis convallis tellus id interdum velit. Libero enim sed faucibus turpis in eu mi. Laoreet id donec ultrices tincidunt arcu non sodales. Sed blandit libero volutpat sed cras ornare arcu. Accumsan lacus vel facilisis volutpat est velit. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Velit egestas dui id ornare. Varius quam quisque id diam vel. Felis eget nunc lobortis mattis aliquam faucibus. Cras pulvinar mattis nunc sed blandit libero volutpat sed.',
            images: {
              before: null,
              after: {
                href: 'https://i.pinimg.com/564x/1a/a0/13/1aa0131ed92cc6d369e67e834fc13a55.jpg',
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
            paragraph:
              'Leo in vitae turpis massa sed elementum tempus egestas sed. Nulla aliquet enim tortor at auctor urna nunc id cursus. Elementum nibh tellus molestie nunc. Arcu ac tortor dignissim convallis aenean. Vestibulum mattis ullamcorper velit sed. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Diam volutpat commodo sed egestas egestas fringilla phasellus. Purus viverra accumsan in nisl nisi scelerisque. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Ac turpis egestas integer eget aliquet nibh praesent. Enim tortor at auctor urna nunc id. Euismod quis viverra nibh cras pulvinar. Augue interdum velit euismod in pellentesque. Magna sit amet purus gravida. Laoreet sit amet cursus sit amet. Vel orci porta non pulvinar neque. Hendrerit dolor magna eget est lorem. Elementum sagittis vitae et leo duis ut diam quam. Massa eget egestas purus viverra. Diam maecenas ultricies mi eget mauris.',
            images: {
              before: {
                href: 'https://i.pinimg.com/564x/3f/42/44/3f42443131a1ba3ed5c47f8f68e41758.jpg',
                alt: 'useState Hook Example 1',
              },
              after: {
                href: 'https://i.pinimg.com/564x/fd/67/be/fd67be57737f1475a9e4bbabd552ad0c.jpg',
                alt: 'useState Hook Example 1',
              },
            },
          },
          {
            paragraph:
              'Egestas dui id ornare arcu odio ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Purus gravida quis blandit turpis cursus in hac. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Arcu non odio euismod lacinia at quis risus sed vulputate. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Amet tellus cras adipiscing enim eu turpis egestas pretium. Quis blandit turpis cursus in hac. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Egestas erat imperdiet sed euismod. Vel risus commodo viverra maecenas accumsan lacus. Condimentum vitae sapien pellentesque habitant morbi tristique. Est ultricies integer quis auctor elit. Ultrices neque ornare aenean euismod elementum nisi quis. Neque viverra justo nec ultrices dui sapien eget. Faucibus turpis in eu mi bibendum neque egestas.',
            images: {
              before: null,
              after: {
                href: 'https://i.pinimg.com/564x/92/d8/b9/92d8b94aceeaef2b6f7f2fbb4e8eb1c6.jpg',
                alt: 'useState Hook Example 1',
              },
            },
          },
          {
            paragraph:
              'Mauris augue neque gravida in. Augue neque gravida in fermentum et sollicitudin ac orci. Donec ac odio tempor orci dapibus. Semper feugiat nibh sed pulvinar proin gravida. Quisque egestas diam in arcu cursus euismod. Vitae justo eget magna fermentum iaculis eu non. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Cursus mattis molestie a iaculis. Consequat id porta nibh venenatis. Quam id leo in vitae turpis massa sed elementum. Sit amet risus nullam eget felis eget nunc. Adipiscing bibendum est ultricies integer quis auctor elit. Eget lorem dolor sed viverra. Ultrices in iaculis nunc sed augue lacus viverra vitae. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Suspendisse faucibus interdum posuere lorem. Tincidunt eget nullam non nisi.',
            images: { before: null, after: null },
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Vel Pharetra vel Turpis Nunc eget Lorem.',
    subTitle: 'The latest JavaScript syntax',
    heroImage: { href: '', alt: '' },
    date: 1716311339999,
    tags: ['JavaScript', 'Web Development'],
    sections: [
      {
        header: 'The new JS',
        content: [
          {
            paragraph:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: {
              before: null,
              after: {
                href: 'https://i.pinimg.com/564x/59/4f/95/594f9550caaa5c1a7a576ae17d8eb5f6.jpg',
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
            paragraph:
              'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
            images: {
              before: {
                href: 'https://i.pinimg.com/564x/11/78/c7/1178c7e44cb02b111a272939f0a07c01.jpg',
                alt: 'useState Hook Example 1',
              },
              after: {
                href: 'https://i.pinimg.com/564x/26/d0/c7/26d0c7f36b920c83a15e727b82a1dab7.jpg',
                alt: 'useState Hook Example 1',
              },
            },
          },
          {
            paragraph: 'Example usage:',
            images: {
              before: {
                href: 'https://i.pinimg.com/564x/40/32/8d/40328d8c8e8ddb8da932c25858c72c04.jpg',
                alt: 'useState Hook Example 1',
              },
              after: null,
            },
          },
          {
            paragraph: '```javascript\nconst [count, setCount] = useState(0);\n```',
            images: { before: null, after: null },
          },
          {
            paragraph:
              'A iaculis at erat pellentesque adipiscing commodo elit. Dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Viverra vitae congue eu consequat ac. Rhoncus dolor purus non enim praesent. Scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Risus ultricies tristique nulla aliquet enim tortor. Mattis aliquam faucibus purus in. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras ornare arcu dui vivamus arcu felis bibendum. Phasellus vestibulum lorem sed risus ultricies. Urna nunc id cursus metus aliquam. Proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet porttitor eget dolor morbi non arcu risus. Senectus et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque.',
            images: {
              before: null,
              after: null,
            },
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
