import { Button as ButtonComponent } from '..';
import type { ButtonProps } from './Button';

const story = {
  title: 'Components/button/Button',
  component: ButtonComponent,
};

export const Button = (args: ButtonProps) => <ButtonComponent {...args} />;

const args: ButtonProps = {
  color: 'blue',
  icon: 'none',
  value: 'Button',
  onClick: () => alert('Button Clicked'),
  disabled: false,
};

Button.args = args;

export default story;
