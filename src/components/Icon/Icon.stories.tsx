import React from 'react';
import { ComponentMeta } from '@storybook/react';

/* @Types */
import { TIconProps } from './Icon.types';

/* @Components */
import { Icon } from './Icon';

/* @Icons */
import * as ICONS from 'icons';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Preview for icons',
      },
    },
  },
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Icon>;

export const Default = <P extends {}>({ props = {} as P }: TIconProps<P>) => (
  <Icon glyph={ICONS.Bag} {...props} />
);

export const Icons = <P extends {}>({ props = {} as P }: TIconProps<P>) => {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', maxWidth: '600px' }}>
      {Object.keys(ICONS).map((icon: string) => (
        <div key={icon} style={{ margin: '5px' }} title={icon}>
          <Icon glyph={ICONS[icon]} {...props} />
        </div>
      ))}
    </div>
  );
}