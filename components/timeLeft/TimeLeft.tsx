import moment from 'moment';

export interface TimeLeftProps {
  endDate: string;
}

const TimeLeft = (props: TimeLeftProps) => {
  const now = moment();
  const end = moment(props.endDate);
  const hours = end.diff(now, 'hours');
  const milliSeconds = end.diff(now, 'millisecond');
  const miliSecondsPerDay = parseInt((86400000 / 1000000).toString());
  const miliSecondsLeft = parseInt((milliSeconds / 1000000).toString());
  const miliSecondsPassed = miliSecondsPerDay - miliSecondsLeft;

  return (
    <div className="space-y-1 pt-1">
      <div className="flex bg-black w-[86px]">
        {[...Array(miliSecondsLeft)].map((_, index) => (
          <div key={index} className="bg-blue-600 h-1 w-[1px]"></div>
        ))}
        {[...Array(miliSecondsPassed)].map((_, index) => (
          <div key={index} className="bg-gray-400 h-1 w-[1px]"></div>
        ))}
      </div>
      <div className="text-xs">{hours}hr left</div>
    </div>
  );
};

export default TimeLeft;
