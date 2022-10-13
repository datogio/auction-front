import { FaTimes } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import type { MouseEventHandler, ReactNode } from 'react';

export interface IHeader {
  title: 'BACK' | string;
  titleIcon: 'CLOSE' | 'DOTS';
  firstOnClick?: MouseEventHandler<SVGElement>;
  secondOnClick: MouseEventHandler<SVGElement>;
}

const SECOND_ICON_MAPS: Record<
  IHeader['titleIcon'],
  (clickHandler: IHeader['secondOnClick']) => ReactNode
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

const Header = ({ title, titleIcon, secondOnClick }: IHeader) => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div>
        {title === 'BACK' ? (
          <IoIosArrowRoundBack className="text-2xl cursor-pointer" />
        ) : (
          title
        )}
      </div>
      {SECOND_ICON_MAPS[titleIcon](secondOnClick)}
    </div>
  );
};

export default Header;
