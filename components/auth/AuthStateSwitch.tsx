import { MouseEventHandler } from 'react';

interface AuthStateSwitchProps {
  value: 'Sign In' | 'Sign Up';
  onCLick: MouseEventHandler<HTMLDivElement>;
}

const AuthStateSwitch = (props: AuthStateSwitchProps) => {
  return (
    <div className="flex justify-center">
      <div onClick={props.onCLick} className="cursor-pointer">
        {props.value}
      </div>
    </div>
  );
};

export default AuthStateSwitch;
