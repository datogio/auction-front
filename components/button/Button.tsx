import { MouseEventHandler, ReactNode } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';

export interface ButtonProps {
  color: 'blue' | 'white';
  icon: 'none' | 'add' | 'yes' | 'no';
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const iconsMap: Record<ButtonProps['icon'], ReactNode> = {
  none: null,
  add: <FaPlus />,
  yes: <BsCheckLg />,
  no: <FaTimes className="text-2xl" />,
};

const colorsMap: Record<ButtonProps['color'], ReactNode> = {
  blue: 'bg-blue-600 text-white',
  white: 'bg-white text-blue-600',
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${props.disabled && 'opacity-40'} ${
        colorsMap[props.color]
      } button`}
    >
      <div>{iconsMap[props.icon]}</div>
      <div>{props.value}</div>
    </button>
  );
};

export default Button;
