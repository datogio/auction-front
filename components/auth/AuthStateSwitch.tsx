import { MouseEventHandler } from 'react';

interface AuthStateSwitchProps {
  value: 'Sign In' | 'Sign Up';
  onCLick: MouseEventHandler<HTMLDivElement>;
}

const AuthStateSwitch = (props: AuthStateSwitchProps) => {
  return (
    <div className="flex justify-center text-lg">
      <div
        onClick={props.onCLick}
        className="cursor-pointer ml-2 text-white transition duration-200 hover:text-gray-200 hover:scale-125 active:scale-90"
      >
        {props.value}
      </div>
    </div>
  );
};

export default AuthStateSwitch;
