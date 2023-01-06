import { useState } from 'react';
import { SignIn, SignUp } from '../../components';
import { motion } from 'framer-motion';
import { authAnimation } from '../../utils/animation';

const Auth = () => {
  const [authState, setAuthState] = useState<'sign in' | 'sign up'>('sign in');

  const onAuthStateChange = (state: 'sign in' | 'sign up') => {
    setAuthState(state);
  };

  return (
    <motion.div {...authAnimation} className="md:w-[30%]">
      {authState === 'sign in' && <SignIn setAuthState={onAuthStateChange} />}
      {authState === 'sign up' && <SignUp setAuthState={onAuthStateChange} />}
    </motion.div>
  );
};

export default Auth;
