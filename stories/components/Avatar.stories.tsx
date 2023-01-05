import { Avatar as AvatarComponent } from '../../components';
import type { AvatarProps } from '../../components/avatar/Avatar';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent,
};

export const Avatar = (args: AvatarProps) => <AvatarComponent {...args} />;

const args: AvatarProps = {
  size: 'sm',
  image: fromImgToUrl(),
};
Avatar.args = args;
