import { ReactNode } from 'react';

export interface IFirstAndLastName {
  children: ReactNode;
}

const FirstAndLastName = ({ children }: IFirstAndLastName) => {
  return <div className="flex space-x-1">{children}</div>;
};

export default FirstAndLastName;
