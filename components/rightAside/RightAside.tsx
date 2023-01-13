import { useRouter } from 'next/router';
import { RightAsideForStore } from '../../components';

interface RightAsideProps {
  onAddListingClick: () => void;
}

const RightAside = (props: RightAsideProps) => {
  const router = useRouter();

  return (
    <aside className="paddings col-span-3 bg-white">
      {router.pathname === '/store' && (
        <RightAsideForStore onAddListingClick={props.onAddListingClick} />
      )}
    </aside>
  );
};

export default RightAside;
