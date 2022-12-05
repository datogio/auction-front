import { PageLayout } from '../layouts';
import { useDispatch } from 'react-redux';
import * as userActions from '../store/user';

import type { NextPage } from 'next';
import type { Dispatch } from 'react';

const HomePage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleSignIn = () => {
    dispatch(
      userActions.signIn({
        identifier: 'datogio@gmail.com',
        password: 'password',
      })
    );
  };

  const handleSignOut = () => {
    dispatch(userActions.signOut());
  };

  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>Hello World!</div>
      <div>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </PageLayout>
  );
};

export default HomePage;
