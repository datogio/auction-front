import { useRouter } from 'next/router';
import { Navigation, NavItem, Identity } from '../../components';

const LeftAside = () => {
  const router = useRouter();

  return (
    <aside className="col-span-2 paddings bg-white flex flex-col justify-between">
      <h1 className="text-3xl font-bold">Auction</h1>
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
      <Identity
        firstName="David"
        lastName="Giorgadze"
        details="2 hours ago"
        image=""
      />
    </aside>
  );
};

export default LeftAside;
