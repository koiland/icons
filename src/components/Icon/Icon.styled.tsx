import styled from 'styled-components';

/* @Types */
import { TIconSize, TIconAppearance, TIconSizeMap } from './Icon.types';

export const ICON_SIZE_MAP: TIconSizeMap = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xlg: '40px',
};

export const IconStyled = styled.span<{ size: TIconSize; appearance: TIconAppearance }>(({ size, appearance }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: ICON_SIZE_MAP[size],
  height: ICON_SIZE_MAP[size],
  backgroundColor: `var(--${appearance}-200)`,
  transition: 'transform var(--transition-default), fill var(--transition-default)',
}));
