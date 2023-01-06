import { ReactNode } from 'react';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { BsBookmarkDash } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiHelpCircle } from 'react-icons/fi';

export interface NavItemProps {
  href: string;
  icon: 'home' | 'settings' | 'saved' | 'notifications' | 'help';
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
    <Link href={props.href}>
      <a
        className={`${
          props.active
            ? 'bg-blue-600 text-white cursor-default shadow-lg'
            : 'cursor-pointer text-gray-600 hover:bg-gray-100 hover:shadow-lg'
        } transition duration-200 py-2 rounded-md w-[100%] px-4 flex items-center space-x-2`}
      >
        {iconsMap[props.icon]}
        <div>{props.value}</div>
      </a>
    </Link>
  );
};

export default NavItem;
