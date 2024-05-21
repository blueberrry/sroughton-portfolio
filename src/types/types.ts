import { COMPONENT_STYLE_TYPES } from '../consts';

export type ThemeNames = 'default' | 'tropical' | 'mystic' | 'night' | 'purple-hills';

export type AreaNames = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export type BgStates = 'bg' | 'img' | 'grad' | 'dark-bg' | 'secondary-img' | 'complementary-bg'; // todo extend as needed

export type AppRoutes = 'home' | 'projects' | 'page-3' | 'page-4' | 'page-5' | 'page-6'; // todo: implement

export type CompStyleTypeKeys = keyof typeof COMPONENT_STYLE_TYPES;
