import { ReactElement } from 'react';
import { COMPONENT_STYLE_TYPES, TITLE_STYLE_TYPES } from '../consts';
import { MobileContentBlock, DesktopContentBlock, Paragraph, ResponsiveImage } from 'src/components';

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

export type HeaderSwitcherMode = 'full' | 'toTitle' | 'title' | null;

/**
 *
 * * Routing
 */

export type AppRoutes = '/' | 'home' | 'projects' | 'articles' | 'page-4' | 'page-5' | 'page-6';

/**
 *
 * * App Components
 */

export type TitleStyleTypes = (typeof TITLE_STYLE_TYPES)[number];

export type ImageSrcSet = { mobile: string | null; tablet: string | null; desktop: string | null };

export type Image = { src: string; alt: string; caption?: string; srcSet?: ImageSrcSet };

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

export type SectionChild =
  | typeof Paragraph
  | typeof ResponsiveImage
  | typeof MobileContentBlock
  | typeof DesktopContentBlock
  | ParagraphChild
  | ReactElement<'img'>
  | ReactElement<'div'>
  | null;

export type ArticleChild = SectionChild;

/**
 *
 * * Response data
 */

export type Paragraph_JSON = { id: string; text: string };

export type Image_JSON = Image & { id: string };

export type Section_JSON = { id: string; header: string; paragraphs: Paragraph_JSON[]; images: Image_JSON[] };

export type Article_JSON = {
  id: string;
  title: string;
  tagline: string;
  heroImage: Image;
  date: Date | number;
  tags: string[];
  sections: Section_JSON[];
};

export type MaxLength3Array<T> = [T, T?, T?];
