import { Avatar as AvatarComponent } from '..';
import type { AvatarProps } from './Avatar';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';

const story = {
  title: 'Components/avatar/Avatar',
  component: AvatarComponent,
};

export const Avatar = (args: AvatarProps) => <AvatarComponent {...args} />;

const args: AvatarProps = {
  size: 'sm',
  firstName: 'David',
  lastName: 'Giorgadze',
  image: fromImgToUrl(),
};

Avatar.args = args;

export default story;
