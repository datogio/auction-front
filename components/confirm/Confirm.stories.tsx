import { Confirm as ConfirmComponent } from '../../components';
import type { ConfirmProps } from './Confirm';

const stories = {
  title: 'Components/confirm/Confirm',
  component: ConfirmComponent,
};

export const Confirm = (args: ConfirmProps) => <ConfirmComponent {...args} />;

const args: ConfirmProps = {
  onYesClick: () => alert('yes'),
  onNoClick: () => alert('no'),
};

Confirm.args = args;

export default stories;
