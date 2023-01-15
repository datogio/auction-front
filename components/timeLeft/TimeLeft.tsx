import moment from 'moment';
import { useState, memo, useRef } from 'react';
import { TimeLeftTick } from '../../components';
import { useInterval } from '../../hooks';

export interface TimeLeftProps {
  endDate: string;
}

const TimeLeft = (props: TimeLeftProps) => {
  const [now, setNow] = useState(moment());
  const end = useRef(moment(props.endDate));

  useInterval(
    () => {
      setNow(moment());
    },
    end.current.diff(now, 'milliseconds') > 0 ? 1000 : null
  );

  const millisecondsLeft = () => {
    const milliSeconds = end.current.diff(now, 'millisecond');
    const millisecondsLeft = parseInt((milliSeconds / 1000000).toString());
    return millisecondsLeft;
  };

  const millisecondsPassed = () => {
    const millisecondsPerDay = parseInt((86400000 / 1000000).toString());
    const millisecondsPassed = millisecondsPerDay - millisecondsLeft();
    return millisecondsPassed;
  };

  const hoursLeft = () => {
    const hours = end.current.diff(now, 'hours');
    return hours;
  };

  return (
    <div className="space-y-1 pt-1">
      <div className="flex w-[86px] rounded overflow-hidden">
        {end.current.diff(now, 'milliseconds') > 0 &&
          [...Array(millisecondsLeft())].map((_, index) => (
            <TimeLeftTick key={index} type="left" />
          ))}
        {[
          ...Array(
            end.current.diff(now, 'milliseconds') > 0
              ? millisecondsPassed()
              : parseInt((86400000 / 1000000).toString())
          ),
        ].map((_, index) => (
          <TimeLeftTick key={index} type="passed" />
        ))}
      </div>
      <div className="text-xs text-gray-600">{hoursLeft()}hr left</div>
    </div>
  );
};

export default memo(TimeLeft);
