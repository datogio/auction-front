import type { MouseEventHandler } from 'react';

export interface IButton {
  value: string;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  onClick: MouseEventHandler<HTMLInputElement>;
}

const SIZE_MAPS: Record<IButton['size'], string> = {
  ['SMALL']: 'w-24',
  ['MEDIUM']: 'w-32',
  ['LARGE']: 'w-44',
};

const Button = ({ value, size, onClick }: IButton) => {
  return (
    <input
      type="submit"
      value={value}
      onClick={onClick}
      className={`${SIZE_MAPS[size]} cursor-pointer bg-[#5458F7] text-white font-bold p-2 rounded-full transition active:scale-95`}
    />
  );
};

export default Button;
