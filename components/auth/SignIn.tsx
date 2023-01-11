import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  Dispatch,
} from 'react';
import { AuthStateSwitch, AuthTitle, Button, Input } from '../../components';
import { motion } from 'framer-motion';
import { authAnimation } from '../../utils/animation';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/user';
import * as promptActions from '../../store/prompt';

interface SignInProps {
  setAuthState: (state: 'sign in' | 'sign up') => void;
}

const SignIn = (props: SignInProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [inputs, setInputs] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onButtonCLick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputs.email)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Email is required',
        })
      );
    if (!inputs.password)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Password is required',
        })
      );

    dispatch(
      userActions.signIn({
        email: inputs.email,
        password: inputs.password,
        setInputs,
      })
    );
  };

  const onLinkClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(promptActions.set([]));
    props.setAuthState('sign up');
  };

  return (
    <motion.div {...authAnimation} className="space-y-5">
      <AuthTitle title="Sign In" />
      <form onSubmit={(event) => event.preventDefault()} className="form">
        <Input
          name="email"
          value={inputs.email}
          onChange={onInputChange}
          focus="on"
        />
        <Input
          name="password"
          value={inputs.password}
          onChange={onInputChange}
          focus="off"
        />
        <Button icon="none" value="Sign In" onClick={onButtonCLick} />
      </form>
      <AuthStateSwitch value="Sign Up" onCLick={onLinkClick} />
    </motion.div>
  );
};

export default SignIn;
