import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  Dispatch,
} from 'react';
import { AuthStateSwitch, AuthTitle, Button, Input } from '../../components';
import { motion } from 'framer-motion';
import { authAnimation } from '../../utils/animation';
import * as userActions from '../../store/user';
import { useDispatch } from 'react-redux';

interface SignUpProps {
  setAuthState: (state: 'sign in' | 'sign up') => void;
}

const SignUp = (props: SignUpProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [inputs, setInputs] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onButtonCLick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputs.firstName) return alert('First name is required');
    if (!inputs.lastName) return alert('Last name is required');
    if (!inputs.email) return alert('Email is required');
    if (!inputs.confirmEmail) alert('Email confirmation is require');
    if (!inputs.password) return alert('Password is required');
    if (!inputs.confirmPassword)
      return alert('Password confirmation is required');
    if (inputs.email !== inputs.confirmEmail)
      return alert("Emails don't match");
    if (inputs.password !== inputs.confirmPassword)
      return alert("Passwords don't match");

    dispatch(
      userActions.signUp({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        setInputs,
      })
    );
  };

  const onLinkClick: MouseEventHandler<HTMLDivElement> = () => {
    props.setAuthState('sign in');
  };

  return (
    <motion.div {...authAnimation} className="space-y-5">
      <AuthTitle title="Sign Up" />
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col space-y-2"
      >
        <Input
          name="firstName"
          value={inputs.firstName}
          onChange={onInputChange}
        />
        <Input
          name="lastName"
          value={inputs.lastName}
          onChange={onInputChange}
        />
        <Input name="email" value={inputs.email} onChange={onInputChange} />
        <Input
          name="confirmEmail"
          value={inputs.confirmEmail}
          onChange={onInputChange}
        />
        <Input
          name="password"
          value={inputs.password}
          onChange={onInputChange}
        />
        <Input
          name="confirmPassword"
          value={inputs.confirmPassword}
          onChange={onInputChange}
        />
        <Button value="Sign Up" onClick={onButtonCLick} />
      </form>
      <AuthStateSwitch value="Sign In" onCLick={onLinkClick} />
    </motion.div>
  );
};

export default SignUp;
