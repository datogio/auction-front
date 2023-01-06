import { Navigation as NavigationComponent, NavItem } from '../../components';
import type { NavigationProps } from '../../components/navigation/Navigation';

export default {
  title: 'Components/Navigation',
  component: NavigationComponent,
};

export const Navigation = (args: NavigationProps) => (
  <div className="bg-gray-100 p-5">
    <NavigationComponent>
      <NavItem href="/" icon="home" value="HOME" active={false} />
      <NavItem href="/" icon="store" value="STORE" active={true} />
      <NavItem href="/" icon="saved" value="SAVED ITEMS" active={false} />
      <NavItem
        href="/"
        icon="notifications"
        value="NOTIFICATIONS"
        active={false}
      />
      <NavItem href="/" icon="settings" value="SETTINGS" active={false} />
      <NavItem href="/" icon="help" value="HELP" active={false} />
    </NavigationComponent>
  </div>
);

const args: NavigationProps = {};

Navigation.args = args;
