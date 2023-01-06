import { Navigation as NavigationComponent, NavItem } from '../../components';
import type { NavigationProps } from '../../components/navigation/Navigation';

export default {
  title: 'Components/Navigation',
  component: NavigationComponent,
};

export const Navigation = (args: NavigationProps) => (
  <div className="bg-gray-100 p-5">
    <NavigationComponent>
      <NavItem href="/" icon="home" value="HOME" active={true} />
      <NavItem href="/" icon="saved" value="SAVED ITEMS" />
      <NavItem href="/" icon="notifications" value="NOTIFICATIONS" />
      <NavItem href="/" icon="settings" value="SETTINGS" />
      <NavItem href="/" icon="help" value="HELP" />
    </NavigationComponent>
  </div>
);

const args: NavigationProps = {};

Navigation.args = args;
