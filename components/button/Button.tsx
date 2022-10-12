import type { MouseEventHandler } from 'react';

export interface IButton {
  value: string;
  onClick: MouseEventHandler<HTMLInputElement>;
}

const Button = ({ value, onClick }: IButton) => {
  return (
    <input
      type="submit"
      value={value}
      onClick={onClick}
      className="cursor-pointer bg-[#5458F7] text-white font-bold p-2 w-[100%] rounded-full transition active:scale-95"
    />
  );
};

export default Button;
