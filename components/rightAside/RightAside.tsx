import { useRouter } from 'next/router';
import { RightAsideForStore, Bids } from '../../components';

interface RightAsideProps {
  onAddListingClick: () => void;
  listingId?: string;
}

const RightAside = (props: RightAsideProps) => {
  const router = useRouter();

  return (
    <aside className="paddings col-span-3 bg-white">
      {router.pathname === '/store' && (
        <RightAsideForStore onAddListingClick={props.onAddListingClick} />
      )}
      {router.pathname.includes('/store/') && props.listingId && (
        <Bids listingId={props.listingId} />
      )}
    </aside>
  );
};

export default RightAside;
