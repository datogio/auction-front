import { useState, ChangeEventHandler, MouseEventHandler } from 'react';
import { AuthStateSwitch, AuthTitle, Button, Input } from '../../components';

interface SignInProps {
  setAuthState: (state: 'sign in' | 'sign up') => void;
}

const SignIn = (props: SignInProps) => {
  const [inputs, setInputs] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onButtonCLick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputs.email) return alert('Email is required');
    if (!inputs.password) return alert('Password is required');

    alert(`${inputs.email} - ${inputs.password}`);
    setInputs({ email: '', password: '' });
  };

  const onLinkClick: MouseEventHandler<HTMLDivElement> = () => {
    props.setAuthState('sign up');
  };

  return (
    <div className="space-y-5">
      <AuthTitle title="Sign In" />
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col space-y-2"
      >
        <Input name="email" value={inputs.email} onChange={onInputChange} />
        <Input
          name="password"
          value={inputs.password}
          onChange={onInputChange}
        />
        <Button value="Sign In" onClick={onButtonCLick} />
      </form>
      <AuthStateSwitch value="Sign Up" onCLick={onLinkClick} />
    </div>
  );
};

export default SignIn;
