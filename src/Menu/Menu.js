/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { MenuDivider, MenuGroup, MenuItem } from './index';

import type { Item } from './MenuItem';

type Props = {
  /** [MenuDivider](../menu-divider), [MenuGroup](../menu-group), or [MenuItem](../menu-item) */
  children?: React$Node,
  /** Data used to contruct Menu. See [example](#data) */
  data?: Items | ItemGroups,
  /** @Private Function that returns props to be applied to each item */
  getItemProps?: (props: Object, scope: Object) => Object
};

export type ItemGroup = { items: Array<Item>, title?: React$Node };
export type Items = Array<Item>;
export type ItemGroups = Array<ItemGroup>;

const Root = createStyledComponent(
  'div',
  {},
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

/**
 * A Menu presents a list of options representing actions or navigation.
 * Composed of [MenuItems](../menu-item), Menu is usually combined with [Popover](../popover) to create a [Dropdown](../dropdown).
 *
 * Menus are great for collecting actions in one place so your users don't need to scan the entire document to find a feature.
 */
export default function Menu({
  children,
  data,
  getItemProps,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  return (
    <Root {...rootProps}>
      {data ? renderFromData(data, getItemProps) : children}
    </Root>
  );
}

const isGroupedData = (data: Items | ItemGroups) => {
  return data[0].hasOwnProperty('items');
};

const groupifyData = (data: Items | ItemGroups) => {
  return isGroupedData(data) ? data : [{ items: data }];
};

export const getItems = (data: Items | ItemGroups) => {
  // $FlowFixMe https://github.com/facebook/flow/issues/5885
  const itemGroups: ItemGroups = groupifyData(data);
  return itemGroups.reduce((acc, group) => {
    return group.items && group.items.length
      ? acc.concat(group.items.filter(item => !item.divider))
      : acc;
  }, []);
};

function renderFromData(data, getItemProps) {
  // $FlowFixMe https://github.com/facebook/flow/issues/5885
  const itemGroups: ItemGroups = groupifyData(data);
  return itemGroups.reduce(
    (acc, group, groupIndex) => {
      acc.groups.push(renderMenuGroup(group, groupIndex, getItemProps, acc));
      return acc;
    },
    { groups: [], itemIndex: 0 }
  ).groups;
}

function renderMenuGroup(group: ItemGroup, groupIndex, getItemProps, acc) {
  return group.items && group.items.length ? (
    <MenuGroup key={groupIndex} title={group.title}>
      {group.items.map((item, itemIndex) => {
        return renderMenuItem(item, itemIndex, getItemProps, acc);
      })}
    </MenuGroup>
  ) : null;
}

function renderMenuItem(item, itemIndex, getItemProps, acc) {
  if (item.divider) {
    return <MenuDivider key={itemIndex} />;
  } else {
    const index = acc.itemIndex++; // Excludes MenuDividers
    const { text, ...restItemProps } = item;
    const itemProps = getItemProps
      ? getItemProps(
          {
            ...restItemProps,
            item
          },
          { index, item }
        )
      : {
          ...restItemProps,
          item
        };

    return (
      <MenuItem key={itemIndex} {...itemProps}>
        {text}
      </MenuItem>
    );
  }
}
