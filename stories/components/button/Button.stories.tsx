import { Button as ButtonComponent } from '../../../components';
import type { IButton } from '../../../components/button/Button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
};

export const Button = (args: IButton) => (
  <ButtonComponent value={args.value} onClick={args.onClick} />
);

Button.args = { value: 'Follow', onClick: () => {} };
