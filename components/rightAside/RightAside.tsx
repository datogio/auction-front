import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Categories, Button } from '../../components';
import * as userActions from '../../store/user';

interface RightAsideProps {
  onAddListingClick: () => void;
}

const RightAside = (props: RightAsideProps) => {
  const router = useRouter();
  const user = useSelector(userActions.selectUser);

  return (
    <aside className="paddings col-span-3 bg-white flex flex-col justify-between">
      <div>{router.pathname === '/store' && <Categories />}</div>
      {user && router.pathname === '/store' && (
        <div>
          <Button
            icon="add"
            value="Add Listing"
            onClick={props.onAddListingClick}
          />
        </div>
      )}
    </aside>
  );
};

export default RightAside;
