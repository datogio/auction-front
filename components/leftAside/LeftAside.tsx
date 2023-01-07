import { useRouter } from 'next/router';
import { Dispatch, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, NavItem, Identity, Button } from '../../components';
import * as userActions from '../../store/user';

interface LeftAsideProps {
  onAuthButtonClick: (state: boolean) => void;
}

const LeftAside = (props: LeftAsideProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();
  const user = useSelector(userActions.selectUser);

  const onAuthClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.onAuthButtonClick(true);
  };

  const handleSignOut: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(userActions.signOut());
  };

  return (
    <aside className="col-span-2 paddings bg-white flex flex-col justify-between">
      <div className="space-y-10">
        <h1 className="text-3xl font-bold">Logo</h1>
        <Navigation>
          <NavItem
            href="/"
            icon="home"
            value="HOME"
            active={router.pathname === '/'}
          />
          <NavItem
            href="/store"
            icon="store"
            value="STORE"
            active={router.pathname === '/store'}
          />
          {user && (
            <NavItem
              href="/saved"
              icon="saved"
              value="SAVED ITEMS"
              active={router.pathname === '/saved'}
            />
          )}
          {user && (
            <NavItem
              href="/notifications"
              icon="notifications"
              value="NOTIFICATIONS"
              active={router.pathname === '/notifications'}
            />
          )}
          {user && (
            <NavItem
              href="/settings"
              icon="settings"
              value="SETTINGS"
              active={router.pathname === '/settings'}
            />
          )}
          <NavItem
            href="/help"
            icon="help"
            value="HELP"
            active={router.pathname === '/help'}
          />
        </Navigation>
      </div>
      {user ? (
        <div onClick={handleSignOut} className="cursor-pointer">
          <Identity
            firstName={user.firstName}
            lastName={user.lastName}
            details="2 hours ago"
            image={user.image}
          />
        </div>
      ) : (
        <Button value="Sign In / SignUp" onClick={onAuthClick} />
      )}
    </aside>
  );
};

export default LeftAside;
