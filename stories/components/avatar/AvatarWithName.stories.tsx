import { AvatarWithName as AvatarWithNameComponent } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IAvatarWithName } from '../../../components/avatar/AvatarWithName';

export default {
  title: 'Components/Avatar',
  moponent: AvatarWithNameComponent,
};

const avatarArgs: IAvatarWithName = {
  firstName: 'David',
  lastName: 'Giorgadze',
};

export const AvatarWithName = (args: IAvatarWithName) => (
  <Container padding="SOLID" color="BLACK">
    <AvatarWithNameComponent
      firstName={args.firstName}
      lastName={args.lastName}
      image={args.image}
    />
  </Container>
);

AvatarWithName.args = { firstName: 'David', lastName: 'Giorgadze' };
