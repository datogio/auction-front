import { MouseEventHandler, ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';

export interface ButtonProps {
  color: 'blue' | 'white';
  icon: 'none' | 'add';
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const iconsMap: Record<ButtonProps['icon'], ReactNode> = {
  none: null,
  add: <FaPlus />,
};

const colorsMap: Record<ButtonProps['color'], ReactNode> = {
  blue: 'bg-blue-600 text-white hover:bg-blue-700',
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
