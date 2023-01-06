import { useState } from 'react';
import { SignIn, SignUp } from '../../components';

const Auth = () => {
  const [authState, setAuthState] = useState<'sign in' | 'sign up'>('sign in');

  const onAuthStateChange = (state: 'sign in' | 'sign up') => {
    setAuthState(state);
  };

  if (authState === 'sign in')
    return <SignIn setAuthState={onAuthStateChange} />;
  if (authState === 'sign up')
    return <SignUp setAuthState={onAuthStateChange} />;

  return null;
};

export default Auth;
