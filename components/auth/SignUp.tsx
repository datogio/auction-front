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
import * as promptActions from '../../store/prompt';
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
    if (!inputs.firstName)
      return dispatch(
        promptActions.add({ type: 'error', message: 'First name is required' })
      );
    if (!inputs.lastName)
      return dispatch(
        promptActions.add({ type: 'error', message: 'Last name is required' })
      );
    if (!inputs.email)
      return dispatch(
        promptActions.add({ type: 'error', message: 'Email is required' })
      );
    if (!inputs.confirmEmail)
      return dispatch(
        promptActions.add({
          type: 'error',
          message: 'Email confirmation is require',
        })
      );
    if (!inputs.password)
      return dispatch(
        promptActions.add({ type: 'error', message: 'Password is required' })
      );
    if (!inputs.confirmPassword)
      return dispatch(
        promptActions.add({
          type: 'error',
          message: 'Password confirmation is required',
        })
      );
    if (inputs.email !== inputs.confirmEmail)
      return dispatch(
        promptActions.add({ type: 'error', message: "Emails don't match" })
      );
    if (inputs.password !== inputs.confirmPassword)
      return dispatch(
        promptActions.add({ type: 'error', message: "Passwords don't match" })
      );

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
    dispatch(promptActions.set([]));
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
          autofocus
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
