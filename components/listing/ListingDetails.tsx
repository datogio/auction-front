import { useSelector } from 'react-redux';
import { TimeLeft, ListingDetailsItem } from '../../components';
import { RootState } from '../../store';
import * as bidActions from '../../store/bid';

export interface ListingDetailsProps {
  listingId: string;
  startingPrice: string;
  endDate: string;
}

const ListingDetails = (props: ListingDetailsProps) => {
  const topBid = useSelector((state: RootState) =>
    bidActions.selectListingsTopBid(state, props.listingId)
  );

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
          value={`$ ${!topBid ? props.startingPrice : topBid.amount}`}
        />
      </div>
    </div>
  );
};

export default ListingDetails;
