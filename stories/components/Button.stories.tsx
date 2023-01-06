import { Button as ButtonComponent } from '../../components';
import type { ButtonProps } from '../../components/button/Button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
};

export const Button = (args: ButtonProps) => <ButtonComponent {...args} />;

const args: ButtonProps = {
  value: 'Button',
  onClick: () => alert('Button Clicked'),
};

Button.args = args;
