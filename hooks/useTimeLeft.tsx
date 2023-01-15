import { useState, useRef } from 'react';
import moment from 'moment';
import { useInterval } from '.';
import { TimeLeftTick } from '../components';

const useTimeLeft = (endDate: string) => {
  const [now, setNow] = useState(moment());
  const end = useRef(moment(endDate));

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
    return hours > -1 ? hours : 0;
  };

  const getLeftTicks = () => {
    return end.current.diff(now, 'milliseconds') > 0
      ? [...Array(millisecondsLeft())].map((_, index) => (
          <TimeLeftTick key={index} type="left" />
        ))
      : null;
  };

  const getPassedTicks = () => {
    return [
      ...Array(
        end.current.diff(now, 'milliseconds') > 0
          ? millisecondsPassed()
          : parseInt((86400000 / 1000000).toString())
      ),
    ].map((_, index) => <TimeLeftTick key={index} type="passed" />);
  };

  return { getLeftTicks, getPassedTicks, hoursLeft };
};

export default useTimeLeft;
