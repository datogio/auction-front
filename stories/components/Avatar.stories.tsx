import { Avatar as AvatarComponent } from '../../components';
import type { IAvatar } from '../../components/Avatar';

export default {
  title: 'Components/Profile',
  component: AvatarComponent,
};

export const Avatar = (args: IAvatar) => (
  <AvatarComponent
    firstName={args.firstName}
    lastName={args.lastName}
    image={args.image}
  />
);

Avatar.args = {
  firstName: 'David',
  lastName: 'Giorgadze',
  image: { url: 'http://localhost:3000/cover-image.jpeg' },
};
