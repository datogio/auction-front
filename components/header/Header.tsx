import { FaTimes } from 'react-icons/fa';
import type { ReactNode } from 'react';

export interface IHeader {
  title: string;
  icon: 'CLOSE';
}

const ICON_MAPS: Record<IHeader['icon'], ReactNode> = {
  ['CLOSE']: <FaTimes className="cursor-pointer" />,
};

const Header = ({ title, icon }: IHeader) => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div>{title}</div>
      {ICON_MAPS[icon]}
    </div>
  );
};

export default Header;
