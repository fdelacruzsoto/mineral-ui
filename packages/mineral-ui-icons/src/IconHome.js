/* @flow */
import React from 'react';
import Icon from 'mineral-ui/Icon';

import type { IconProps } from 'mineral-ui/Icon/types';

/* eslint-disable prettier/prettier */
export default function IconHome(props: IconProps) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </g>
    </Icon>
  );
}

IconHome.displayName = 'IconHome';
IconHome.category = 'action';
