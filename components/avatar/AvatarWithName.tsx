import type { ReactNode } from 'react';

interface IAvatarWithName {
  children: ReactNode;
}

const AvatarWithName = ({ children }: IAvatarWithName) => {
  return <div>{children}</div>;
};

export default AvatarWithName;
