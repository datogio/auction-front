import { NavItem as NavItemComponent } from '../../components';
import type { NavItemProps } from '../../components/navigation/NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItemComponent,
};

export const NavItem = (args: NavItemProps) => <NavItemComponent {...args} />;

const args: NavItemProps = {
  icon: 'home',
  value: 'Home',
  active: true,
};

NavItem.args = args;
