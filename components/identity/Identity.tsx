import { Avatar } from '../../stories/components/Avatar.stories';

export interface IdentityProps {
  firstName: string;
  lastName: string;
  details: string;
  image: string;
}

const Identity = (props: IdentityProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <Avatar
          firstName={props.firstName}
          lastName={props.lastName}
          image={props.image}
          size="md"
        />
      </div>
      <div>
        <div className="flex space-x-1 font-bold text-sm">
          <div>{props.firstName}</div>
          <div>{props.lastName}</div>
        </div>
        <div className="text-xs opacity-60">{props.details}</div>
      </div>
    </div>
  );
};

export default Identity;
