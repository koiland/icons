import React from 'react';

/* @Types */
import { TIconProps } from './Icon.types';

/* @Styled */
import { IconStyled } from './Icon.styled';

export const Icon = <P extends {}>({
  glyph: Glyph,
  size = 'lg',
  appearance,
  style,
  props = {} as P,
}: TIconProps<P>): JSX.Element => {
  return (
    <IconStyled size={size} appearance={appearance}>
      <Glyph style={style} {...props} />
    </IconStyled>
  );
};
