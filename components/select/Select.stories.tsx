import { Select as SelectComponents } from '../../components';
import type { SelectProps } from './Select';

const story = {
  title: 'Components/select/Select',
  component: SelectComponents,
};

export const Select = (args: SelectProps) => <SelectComponents {...args} />;

const args: SelectProps = {
  type: 'Category',
  value: '',
  items: [
    { _id: '1', title: 'First Category' },
    { _id: '2', title: 'Second Category' },
  ],
  onChange: () => alert('changed'),
};
Select.args = args;

export default story;
