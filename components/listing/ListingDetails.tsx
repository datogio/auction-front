import { TimeLeft } from '../../components';

export interface ListingDetailsProps {
  startingPrice: string;
}

const ListingDetails = (props: ListingDetailsProps) => {
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
          <TimeLeft miliSeconds={70000000} />
        </div>
        <div className="col-span-1 space-y-1">
          <div className="text-xs text-gray-600">HIGHEST BID</div>
          <div className="text-xl font-bold">21000000</div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
