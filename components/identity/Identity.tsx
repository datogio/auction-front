import { Avatar, IdentityDetails } from '../../components';

export interface IdentityProps {
  firstName: string;
  lastName: string;
  details: string;
  image: string;
}

const Identity = (props: IdentityProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar
        firstName={props.firstName}
        lastName={props.lastName}
        image={props.image}
        size="md"
      />
      <IdentityDetails
        size="md"
        headline={props.firstName}
        details={props.details}
      />
    </div>
  );
};

export default Identity;
