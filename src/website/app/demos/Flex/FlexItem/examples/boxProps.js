/* @flow */
import FlexItem from '../../common/DemoFlexItem';
import Flex from '../../common/DemoFlex';

export default {
  id: 'box-props',
  title: 'Box Props',
  description: `Because FlexItem composes the [Box](/components/box) component,
it accepts any of [Box's props](/components/box#props). Note that this is still
true when using the [\`flex\` prop](#flex-props), as
[Flex also composes Box](/components/flex/#box-props).`,
  scope: { Flex, FlexItem },
  source: `
    <Flex>
      <FlexItem>A</FlexItem>
      <FlexItem as="span" marginRight="auto" padding="lg">B</FlexItem>
      <FlexItem>C</FlexItem>
    </Flex>`
};
