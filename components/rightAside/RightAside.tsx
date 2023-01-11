import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { Categories, Button } from '../../components';
import * as userActions from '../../store/user';

const RightAside = () => {
  const router = useRouter();
  const user = useSelector(userActions.selectUser);

  const onAddListingClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert('Add listing clicked');
  };

  return (
    <aside className="paddings col-span-3 bg-white flex flex-col justify-between">
      <div>{router.pathname === '/store' && <Categories />}</div>
      {user && (
        <div>
          <Button icon="add" value="Add Listing" onClick={onAddListingClick} />
        </div>
      )}
    </aside>
  );
};

export default RightAside;
