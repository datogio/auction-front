import { MouseEventHandler } from 'react';

export interface ButtonProps {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-blue-600 text-white w-[100%] rounded-md py-2 shadow-lg transition duration-200 active:shadow-none"
    >
      {props.value}
    </button>
  );
};

export default Button;
