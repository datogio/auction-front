import { useSelector } from 'react-redux';
import { Categories, Button } from '../../components';
import * as userActions from '../../store/user';

interface RightAsideForStoreProps {
  onAddListingClick: () => void;
}

const RightAsideForStore = (props: RightAsideForStoreProps) => {
  const user = useSelector(userActions.selectUser);

  return (
    <div className="flex flex-col justify-between h-[100%]">
      <Categories />
      {user && (
        <div>
          <Button
            icon="add"
            value="Add Listing"
            onClick={props.onAddListingClick}
          />
        </div>
      )}
    </div>
  );
};

export default RightAsideForStore;
