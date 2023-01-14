import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RightAsideForStore, Bid } from '../../components';
import { RootState } from '../../store';
import * as bidActions from '../../store/bid';

interface RightAsideProps {
  onAddListingClick: () => void;
  listingId?: string;
}

const RightAside = (props: RightAsideProps) => {
  const router = useRouter();
  const bids = useSelector((state: RootState) =>
    bidActions.selectListingBids(state, props.listingId || '')
  );

  return (
    <aside className="paddings col-span-3 bg-white">
      {router.pathname === '/store' && (
        <RightAsideForStore onAddListingClick={props.onAddListingClick} />
      )}
      {router.pathname.includes('/store/') && (
        <div>
          {bids.map((bid) => (
            <Bid
              key={bid._id}
              bidAmount={bid.amount}
              details="2 hours ago"
              firstName={bid.bidder.firstName}
              lastName={bid.bidder.lastName}
              image={bid.bidder.image}
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default RightAside;
