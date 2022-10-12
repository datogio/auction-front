import { Avatar, Name } from '../../components';

export interface IAvatarWithName {
  firstName: string;
  lastName: string;
  image?: image.Response;
}

const AvatarWithName = ({ firstName, lastName, image }: IAvatarWithName) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Avatar firstName={firstName} lastName={lastName} image={image} />
      <Name name={firstName} />
    </div>
  );
};

export default AvatarWithName;
