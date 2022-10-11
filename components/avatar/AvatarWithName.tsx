import type { ReactNode } from 'react';

interface IAvatarWithName {
  children: ReactNode;
}

const AvatarWithName = ({ children }: IAvatarWithName) => {
  return <div className="flex flex-col items-center space-y-2">{children}</div>;
};

export default AvatarWithName;
