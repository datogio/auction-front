import { TimeLeft, ListingDetailsItem } from '../../components';

export interface ListingDetailsProps {
  startingPrice: string;
  endDate: string;
}

const ListingDetails = (props: ListingDetailsProps) => {
  return (
    <div className="row-span-1 bg-white rounded-lg shadow-lg p-4 space-y-2">
      <div className="text-sm font-bold">DETAILS</div>
      <div className="grid grid-cols-3">
        <ListingDetailsItem
          type="starting price"
          value={`$ ${props.startingPrice}`}
        />
        <ListingDetailsItem type="time left">
          <TimeLeft endDate={props.endDate} />
        </ListingDetailsItem>
        <ListingDetailsItem
          type="current price"
          value={`$ ${props.startingPrice}`}
        />
      </div>
    </div>
  );
};

export default ListingDetails;
