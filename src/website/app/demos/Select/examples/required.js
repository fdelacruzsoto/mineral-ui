/* @flow */
import Select from '../../../../../Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'required',
  title: 'Required',
  description: `The \`required\` prop on a Select does nothing visually on
its own, but is important for accessibility. See FormField's
[Required](../form-field/#required) and [Validation](../form-field/#validation)
examples for more information.`,
  scope: { data, Select },
  source: `
    <Select data={data} required />
  `
};