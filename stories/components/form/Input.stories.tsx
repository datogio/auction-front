import { Input as InputComponent } from '../../../components';
import type { IInput } from '../../../components/form/Input';

export default {
  title: 'Components/Form',
  component: InputComponent,
};

export const Input = (args: IInput) => (
  <InputComponent icon={args.icon} placeholder={args.placeholder} />
);

const args: IInput = {
  icon: 'SEARCH',
  placeholder: 'Search',
};
Input.args = args;
