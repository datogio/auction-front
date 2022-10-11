export interface IFirstName {
  firstName: string;
}

const FirstName = ({ firstName }: IFirstName) => {
  return <div>{firstName}</div>;
};

export default FirstName;
