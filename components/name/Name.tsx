import type { IAvatar } from '../avatar/Avatar';

export interface IName {
  name: IAvatar['firstName'] | IAvatar['lastName'];
}

const Name = ({ name }: IName) => {
  return <div className="text-lg font-bold">{name}</div>;
};

export default Name;
