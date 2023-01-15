import { Provider } from 'react-redux';
import { store } from '../../store';
import { NavItem as NavItemComponent } from '..';
import type { NavItemProps } from './NavItem';

const story = {
  title: 'Components/navigation/NavItem',
  component: NavItemComponent,
};

export const NavItem = (args: NavItemProps) => (
  <Provider store={store}>
    <NavItemComponent {...args} />
  </Provider>
);

const args: NavItemProps = {
  href: '/',
  icon: 'home',
  value: 'Home',
  active: true,
};

NavItem.args = args;

export default story;
