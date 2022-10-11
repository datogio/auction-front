import {
  AvatarWithName as AvatarWithNameComponent,
  Avatar,
  FirstAndLastName,
  Name,
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
    <FirstAndLastName>
      <Name name={avatarArgs.firstName} />
      <Name name={avatarArgs.lastName} />
    </FirstAndLastName>
  </AvatarWithNameComponent>
);
