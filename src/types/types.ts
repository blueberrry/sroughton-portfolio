import { ReactElement } from 'react';
import { COMPONENT_STYLE_TYPES, TITLE_STYLE_TYPES } from '../consts';

/**
 * All types to live here other than component prop types which live within
 * each component respectively
 */

/**
 *
 * * Globally used colours, themes and app style states
 */

export type ThemeNames = 'default' | 'tropical' | 'mystic' | 'night' | 'purple-hills';

export type AreaNames = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export type BgStates = 'bg' | 'img' | 'grad' | 'dark-bg' | 'secondary-img' | 'complementary-bg'; // todo extend as needed

export type CompStyleTypeKeys = keyof typeof COMPONENT_STYLE_TYPES;

/**
 *
 * * Routing
 */

export type AppRoutes = 'home' | 'projects' | 'page-3' | 'page-4' | 'page-5' | 'page-6'; // todo: implement

/**
 *
 * * App Components
 */

export type TitleStyleTypes = (typeof TITLE_STYLE_TYPES)[number];

export type Image = { href: string; alt: string };

/**
 *
 * * Typography child[ren] types
 */

export type ParagraphChild =
  | string
  | ReactElement<HTMLElement>
  | ReactElement<'span'>
  | ReactElement<'a'>
  | ReactElement<'p'>;

export type SectionChild = ParagraphChild | ReactElement<'img'> | ReactElement<'div'>;

export type ArticleChild = SectionChild;

/**
 *
 * * Response data
 */

export type SectionContent_JSON = { paragraph: string; images: { before: Image | null; after: Image | null } };

export type Section_JSON = { header: string; content: SectionContent_JSON[] };

export type Article_JSON = {
  id: string;
  title: string;
  subTitle: string;
  heroImage: Image;
  date: Date | number;
  tags: string[];
  sections: Section_JSON[];
};
