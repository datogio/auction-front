import { Button as ButtonComponent } from '../../../components';
import type { IButton } from '../../../components/button/Button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
};

export const Button = (args: IButton) => (
  <ButtonComponent value={args.value} size={args.size} onClick={args.onClick} />
);

const buttonArgs: IButton = {
  value: 'Follow',
  size: 'SMALL',
  onClick: () => {},
};
Button.args = buttonArgs;
