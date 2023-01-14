import moment from 'moment';
import { useState, memo } from 'react';
import { TimeLeftTick } from '../../components';
import { useInterval } from '../../hooks';

export interface TimeLeftProps {
  endDate: string;
}

const TimeLeft = (props: TimeLeftProps) => {
  const [now, setNow] = useState(moment());

  useInterval(() => {
    setNow(moment());
  }, 1000);

  const millisecondsLeft = () => {
    const end = moment(props.endDate);
    const milliSeconds = end.diff(now, 'millisecond');
    const millisecondsLeft = parseInt((milliSeconds / 1000000).toString());
    return millisecondsLeft;
  };

  const millisecondsPassed = () => {
    const millisecondsPerDay = parseInt((86400000 / 1000000).toString());
    const millisecondsPassed = millisecondsPerDay - millisecondsLeft();
    return millisecondsPassed;
  };

  const hoursLeft = () => {
    const end = moment(props.endDate);
    const hours = end.diff(now, 'hours');
    return hours;
  };

  return (
    <div className="space-y-1 pt-1">
      <div className="flex w-[86px] rounded overflow-hidden">
        {[...Array(millisecondsLeft())].map((_, index) => (
          <TimeLeftTick key={index} type="left" />
        ))}
        {[...Array(millisecondsPassed())].map((_, index) => (
          <TimeLeftTick key={index} type="passed" />
        ))}
      </div>
      <div className="text-xs text-gray-600">{hoursLeft()}hr left</div>
    </div>
  );
};

export default memo(TimeLeft);
