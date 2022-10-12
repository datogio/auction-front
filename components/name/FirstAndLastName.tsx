import { Name } from '../../components';

export interface IFirstAndLastName {
  firstName: string;
  lastName: string;
}

const FirstAndLastName = ({ firstName, lastName }: IFirstAndLastName) => {
  return (
    <div className="flex space-x-1">
      <Name name={firstName} />
      <Name name={lastName} />
    </div>
  );
};

export default FirstAndLastName;
