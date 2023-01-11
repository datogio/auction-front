import { Dispatch, MouseEventHandler, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { GoHome } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { BsBookmarkDash, BsCart2 } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiHelpCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import * as promptActions from '../../store/prompt';

export interface NavItemProps {
  href: string;
  icon: 'home' | 'store' | 'settings' | 'saved' | 'notifications' | 'help';
  value: string;
  active?: boolean;
}

const iconsMap: Record<NavItemProps['icon'], ReactNode> = {
  home: <GoHome />,
  store: <BsCart2 />,
  settings: <FiSettings />,
  saved: <BsBookmarkDash />,
  notifications: <IoMdNotificationsOutline />,
  help: <FiHelpCircle />,
};

const NavItem = (props: NavItemProps) => {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();

  const onItemClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(promptActions.set([]));
    router.push(props.href);
  };

  return (
    <div
      onClick={onItemClick}
      className={`${
        props.active
          ? 'bg-blue-600 text-white cursor-default shadow-lg'
          : 'cursor-pointer text-gray-600 hover:bg-gray-100 hover:shadow-lg active:bg-transparent active:shadow-none'
      } transition duration-200 py-2 rounded-md w-[100%] px-4 flex items-center space-x-2`}
    >
      {iconsMap[props.icon]}
      <div className="text-sm">{props.value}</div>
    </div>
  );
};

export default NavItem;
