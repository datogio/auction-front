import { Provider } from 'react-redux';
import { store } from '../../store';
import { Navigation as NavigationComponent, NavItem } from '..';
import type { NavigationProps } from './Navigation';

const story = {
  title: 'Components/navigation/Navigation',
  component: NavigationComponent,
};

export const Navigation = (args: NavigationProps) => (
  <Provider store={store}>
    <div className="bg-gray-100 p-5">
      <NavigationComponent {...args}>
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
  </Provider>
);

const args: NavigationProps = {};

Navigation.args = args;

export default story;
