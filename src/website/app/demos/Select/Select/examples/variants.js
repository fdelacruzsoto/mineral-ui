/* @flow */
import DemoLayout from '../../common/DemoLayout';
import Select from '../../../../../../library/Select';
import { basicData as data } from '../../common/selectData';

export default {
  id: 'variants',
  title: 'Variants',
  description: `is available in a few variants, mostly for use with
[validation](/components/form-field#validation). Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { data, DemoLayout, Select },
  source: `
    <DemoLayout>
      <Select data={data} variant="danger" />
      <Select data={data} variant="success" />
      <Select data={data} variant="warning" />
    </DemoLayout>
  `
};
