import { AreaNames } from 'src/types/types';

export function getBgClass(type = 'bg', area: AreaNames | null | undefined, defaultArea = 'bg-a') {
  if (!area) {
    return defaultArea;
  }
  return `${type === 'bg' ? 'bg-' : `bg-${type}-`}${area}`;
}
