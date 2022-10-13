import { FaTimes } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import type { MouseEventHandler, ReactNode } from 'react';

export interface IHeader {
  title: ReactNode;
  titleIcon: 'CLOSE' | 'DOTS';
  onIconClick: MouseEventHandler<SVGElement>;
}

const SECOND_ICON_MAPS: Record<
  IHeader['titleIcon'],
  (clickHandler: IHeader['onIconClick']) => ReactNode
> = {
  ['CLOSE']: (clickHandler) => (
    <FaTimes className="cursor-pointer" onClick={clickHandler} />
  ),
  ['DOTS']: (clickHandler) => (
    <HiOutlineDotsHorizontal
      className="cursor-pointer"
      onClick={clickHandler}
    />
  ),
};

const Header = ({ title, titleIcon, onIconClick }: IHeader) => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div>{title}</div>
      {SECOND_ICON_MAPS[titleIcon](onIconClick)}
    </div>
  );
};

export default Header;
