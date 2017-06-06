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
import ComponentDoc from '../../../site/src/components/ComponentDoc';
import Default from './examples/Default';

const examples = [
  {
    title: 'Default',
    component: Default,
    source: `<World />`
  }
];

const props = {
  description: 'A simple component that renders the string, "World". It is primarily used for testing project configuration and package distribution.',
  examples,
  slug: 'world',
  title: 'World'
};

export default function App() {
  return <ComponentDoc {...props} />;
}
