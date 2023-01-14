import { memo } from 'react';

interface TimeLeftTickProps {
  type: 'passed' | 'left';
}

const colorsMap: Record<TimeLeftTickProps['type'], string> = {
  passed: 'bg-gray-400',
  left: 'bg-blue-600',
};

const TimeLeftTick = (props: TimeLeftTickProps) => {
  return <div className={`${colorsMap[props.type]} h-1 w-[1px]`} />;
};

export default memo(TimeLeftTick);
