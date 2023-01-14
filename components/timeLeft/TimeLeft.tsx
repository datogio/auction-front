import moment from 'moment';
import { useState, memo } from 'react';
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
      <div className="flex bg-black w-[86px]">
        {[...Array(millisecondsLeft())].map((_, index) => (
          <div key={index} className="bg-blue-600 h-1 w-[1px]"></div>
        ))}
        {[...Array(millisecondsPassed())].map((_, index) => (
          <div key={index} className="bg-gray-400 h-1 w-[1px]"></div>
        ))}
      </div>
      <div className="text-xs">{hoursLeft()}hr left</div>
    </div>
  );
};

export default memo(TimeLeft);
