import { Avatar as AvatarComponent } from '../../../components';
import type { IAvatar } from '../../../components/avatar/Avatar';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent,
};

export const Avatar = (args: IAvatar) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <AvatarComponent
      firstName={args.firstName}
      lastName={args.lastName}
      image={args.image}
    />
  </div>
);

Avatar.args = {
  firstName: 'Random ',
  lastName: 'Woman',
  image: { url: 'http://localhost:3000/cover-image.jpeg' },
};
