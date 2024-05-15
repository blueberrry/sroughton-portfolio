import React from 'react';
import { SVG_TEXT } from './consts';

export type Props = { name: keyof typeof SVG_TEXT };

function SvgText({ name }: Props) {
  return <text>🏠</text>;
}

export default SvgText;
