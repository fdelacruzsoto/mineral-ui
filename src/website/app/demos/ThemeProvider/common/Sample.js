/* @flow */
import React from 'react';
import styled from '@emotion/styled';

const Root = styled('span')(({ theme }) => ({
  backgroundColor: theme.Sample_backgroundColor || 'lavender',
  color: theme.Sample_color || theme.color,
  display: 'inline-block',
  outline: `1px solid ${theme.borderColor}`,
  padding: theme.space_inset_sm
}));

export default function Sample(props: {}) {
  return <Root {...props}>Sample</Root>;
}
