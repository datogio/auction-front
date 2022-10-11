import type { IAvatar } from './avatar/Avatar';

export interface IName {
  name: IAvatar['firstName'] | IAvatar['lastName'];
}

const Name = ({ name }: IName) => {
  return <div>{name}</div>;
};

export default Name;
