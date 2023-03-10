import { TimeLeft as TimeLeftComponent } from '../../components';
import type { TimeLeftProps } from './TimeLeft';

const story = {
  title: 'Components/timeLeft/TimeLeft',
  component: TimeLeftComponent,
};

export const TimeLeft = (args: TimeLeftProps) => (
  <TimeLeftComponent {...args} />
);

const args: TimeLeftProps = {
  endDate: '',
};

TimeLeft.args = args;

export default story;
