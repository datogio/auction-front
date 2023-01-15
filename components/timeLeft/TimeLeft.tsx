import { memo } from 'react';
import { useTimeLeft } from '../../hooks';

export interface TimeLeftProps {
  endDate: string;
}

const TimeLeft = (props: TimeLeftProps) => {
  const { getLeftTicks, getPassedTicks, hoursLeft } = useTimeLeft(
    props.endDate
  );

  return (
    <div className="space-y-1 pt-1">
      <div className="flex w-[86px] rounded overflow-hidden">
        {getLeftTicks()}
        {getPassedTicks()}
      </div>
      <div className="text-xs text-gray-600">{hoursLeft()}hr left</div>
    </div>
  );
};

export default memo(TimeLeft);
