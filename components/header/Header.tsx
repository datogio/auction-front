import { FaTimes } from 'react-icons/fa';
import type { MouseEventHandler, ReactNode } from 'react';

export interface IHeader {
  title: string;
  icon: 'CLOSE';
  onClick: MouseEventHandler<SVGElement>;
}

const ICON_MAPS: Record<
  IHeader['icon'],
  (clickHandler: IHeader['onClick']) => ReactNode
> = {
  ['CLOSE']: (clickHandler) => (
    <FaTimes className="cursor-pointer" onClick={clickHandler} />
  ),
};

const Header = ({ title, icon, onClick }: IHeader) => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div>{title}</div>
      {ICON_MAPS[icon](onClick)}
    </div>
  );
};

export default Header;
