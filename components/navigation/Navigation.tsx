import { ReactNode } from 'react';

export interface NavigationProps {
  children?: ReactNode;
}

const Navigation = (props: NavigationProps) => {
  return <nav className="space-y-5">{props.children}</nav>;
};

export default Navigation;
