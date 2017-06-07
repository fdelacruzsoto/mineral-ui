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
import { ThemeProvider } from '../../index';
import Sample from '../../Sample';

function ShallowMerged() {
  return (
    <div>
      <ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
        <ThemeProvider theme={{ color_warning: 'tomato' }}>
          <Sample />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default {
  title: 'Shallow merged global theme var override',
  component: ShallowMerged,
  description: 'When a nested ThemeProvider provides a different variable, the merge works as expected.',
  source: `<ThemeProvider theme={{ color_primary: 'mediumvioletred' }}>
<ThemeProvider theme={{ color_warning: 'tomato' }}>
  <Sample />
</ThemeProvider>
</ThemeProvider>`
};