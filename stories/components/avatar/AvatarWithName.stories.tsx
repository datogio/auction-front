import {
  AvatarWithName as AvatarWithNameComponent,
  Avatar,
} from '../../../components';
import type { IAvatar } from '../../../components/avatar/Avatar';

export default {
  title: 'Components/Avatar',
  moponent: AvatarWithNameComponent,
};

const avatarArgs: IAvatar = {
  firstName: 'David',
  lastName: 'Giorgadze',
};

export const AvatarWithName = () => (
  <AvatarWithNameComponent>
    <Avatar firstName={avatarArgs.firstName} lastName={avatarArgs.lastName} />
  </AvatarWithNameComponent>
);
