import { MouseEventHandler } from 'react';

interface AuthStateSwitchProps {
  value: 'Sign In' | 'Sign Up';
  onCLick: MouseEventHandler<HTMLDivElement>;
}

const AuthStateSwitch = (props: AuthStateSwitchProps) => {
  return (
    <div className="flex justify-center text-white transition duration-200 hover:text-gray-200 hover:scale-x-110">
      <div onClick={props.onCLick} className="cursor-pointer">
        {props.value}
      </div>
    </div>
  );
};

export default AuthStateSwitch;
