import { ReactNode } from 'react';
import { GoHome } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { BsBookmarkDash } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiHelpCircle } from 'react-icons/fi';

export interface NavItemProps {
  icon: 'settings' | 'home' | 'saved' | 'notifications' | 'help';
  value: string;
  active?: boolean;
}

const iconsMap: Record<NavItemProps['icon'], ReactNode> = {
  home: <GoHome />,
  settings: <FiSettings />,
  saved: <BsBookmarkDash />,
  notifications: <IoMdNotificationsOutline />,
  help: <FiHelpCircle />,
};

const NavItem = (props: NavItemProps) => {
  return (
    <div
      className={`${
        props.active
          ? 'bg-blue-600 text-white cursor-default shadow-lg'
          : 'cursor-pointer'
      } transition duration-200 py-2 rounded-md w-[100%] px-4 flex items-center space-x-2`}
    >
      {iconsMap[props.icon]}
      <div>{props.value}</div>
    </div>
  );
};

export default NavItem;
