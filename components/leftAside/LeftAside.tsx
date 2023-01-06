import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { Navigation, NavItem, Identity, Button } from '../../components';
import * as userActions from '../../store/user';

interface LeftAsideProps {
  onAuthButtonClick: (state: boolean) => void;
}

const LeftAside = (props: LeftAsideProps) => {
  const router = useRouter();
  const user = useSelector(userActions.selectUser);

  const onAuthClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.onAuthButtonClick(true);
  };

  return (
    <aside className="col-span-2 paddings bg-white flex flex-col justify-between">
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
        <NavItem
          href="/saved"
          icon="saved"
          value="SAVED ITEMS"
          active={router.pathname === '/saved'}
        />
        <NavItem
          href="/notifications"
          icon="notifications"
          value="NOTIFICATIONS"
          active={router.pathname === '/notifications'}
        />
        <NavItem
          href="/settings"
          icon="settings"
          value="SETTINGS"
          active={router.pathname === '/settings'}
        />
        <NavItem
          href="/help"
          icon="help"
          value="HELP"
          active={router.pathname === '/help'}
        />
      </Navigation>
      {user ? (
        <Identity
          firstName={user.firstName}
          lastName={user.lastName}
          details="2 hours ago"
          image={user.image}
        />
      ) : (
        <Button value="Sign In / SignUp" onClick={onAuthClick} />
      )}
    </aside>
  );
};

export default LeftAside;
