/* @flow */
import React from 'react';
import Markdown from '../../Markdown';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';

type Props = {
  content: string
};

export default function DocWhenHowToUse(props: Props) {
  const { content } = props;
  return (
    <Section>
      <DocSectionTitle id="when-how-to-use">When/How to Use</DocSectionTitle>
      <Markdown>{content}</Markdown>
    </Section>
  );
}
