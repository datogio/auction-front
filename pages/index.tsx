import * as strapi from '../services/strapi';
import { PageLayout } from '../layouts';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const handleSignIn = () => {
    strapi
      .signIn('datogio@gmail.co', 'password')
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <button onClick={handleSignIn}>Sign In</button>
    </PageLayout>
  );
};

export default HomePage;
