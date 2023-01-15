import { useSelector } from 'react-redux';
import { Bid } from '../../components';
import { RootState } from '../../store';
import * as bidActions from '../../store/bid';

interface BidsProps {
  listingId: string;
}

const Bids = (props: BidsProps) => {
  const bids = useSelector((state: RootState) =>
    bidActions.selectListingTopBids(state, props.listingId || '')
  );

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Top Bids</h2>
      <div className="space-y-5">
        {bids.map((bid) => (
          <div key={bid._id} className="space-y-5">
            <Bid
              bidAmount={bid.amount}
              details="2 hours ago"
              firstName={bid.bidder.firstName}
              lastName={bid.bidder.lastName}
              image={bid.bidder.image}
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bids;
