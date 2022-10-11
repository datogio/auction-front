import { Avatar as AvatarComponent } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IAvatar } from '../../../components/avatar/Avatar';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent,
};

export const Avatar = (args: IAvatar) => (
  <Container padding="SOLID">
    <AvatarComponent
      firstName={args.firstName}
      lastName={args.lastName}
      image={args.image}
    />
  </Container>
);

Avatar.args = {
  firstName: 'Random ',
  lastName: 'Woman',
  image: { url: 'http://localhost:3000/cover-image.jpeg' },
};
