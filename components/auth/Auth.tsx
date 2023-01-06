import { useState } from 'react';
import { SignIn, SignUp } from '../../components';

const Auth = () => {
  const [authState, setAuthState] = useState<'sign in' | 'sign up'>('sign in');

  const onAuthStateChange = (state: 'sign in' | 'sign up') => {
    setAuthState(state);
  };

  return (
    <div>
      {authState === 'sign in' && <SignIn setAuthState={onAuthStateChange} />}
      {authState === 'sign up' && <SignUp setAuthState={onAuthStateChange} />}
    </div>
  );
};

export default Auth;
