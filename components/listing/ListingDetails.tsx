import { TimeLeft } from '../../components';
import moment from 'moment';

export interface ListingDetailsProps {
  startingPrice: string;
  endDate: string;
}

const ListingDetails = (props: ListingDetailsProps) => {
  const now = moment();
  const end = moment(props.endDate);
  const hours = end.diff(now, 'hours');
  const milliSeconds = end.diff(now, 'millisecond');

  return (
    <div className="row-span-1 bg-white rounded-lg shadow-lg p-4 space-y-3">
      <div className="text-sm font-bold">DETAILS</div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 space-y-1">
          <div className="text-xs text-gray-600">STARTING PRICE</div>
          <div className="text-xl font-bold">$ {props.startingPrice}</div>
        </div>
        <div className="col-span-1 space-y-1">
          <div className="text-xs text-gray-600">TIME LEFT</div>
          <TimeLeft hoursLeft={hours} milliSecondsLeft={milliSeconds} />
        </div>
        <div className="col-span-1 space-y-1">
          <div className="text-xs text-gray-600">CURRENT PRICE</div>
          <div className="text-xl font-bold">$ {props.startingPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
