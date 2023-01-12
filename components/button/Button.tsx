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
      className={`${
        props.disabled && 'opacity-40'
      } flex items-center justify-center space-x-2 bg-blue-600 text-white text-lg w-[100%] rounded-md py-2 shadow-lg transition duration-200 hover:bg-blue-700 active:shadow-none`}
    >
      <div>{iconsMap[props.icon]}</div>
      <div>{props.value}</div>
    </button>
  );
};

export default Button;
