import { MouseEventHandler, ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';

export interface ButtonProps {
  icon: 'none' | 'add';
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const iconsMap: Record<ButtonProps['icon'], ReactNode> = {
  none: null,
  add: <FaPlus />,
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${props.disabled && 'opacity-40'} button`}
    >
      <div>{iconsMap[props.icon]}</div>
      <div>{props.value}</div>
    </button>
  );
};

export default Button;
