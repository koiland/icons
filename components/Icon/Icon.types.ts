import { CSSProperties, HTMLAttributes, ComponentType } from 'react';

export type TIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';

export type TIconSizeMap = {
  [key in TIconSize]: string;
};

export type TIconAppearance = 'blue' | 'green' | 'red' | 'white' | 'orange' | 'violet' | 'black';

export interface TIconProps<P> extends HTMLAttributes<SVGSVGElement> {
  glyph?: ComponentType<P>;
  size?: TIconSize;
  appearance?: TIconAppearance;
  className?: string;
  style?: CSSProperties;
  props?: P;
}
