import { PageLayout } from '../layouts';
import { Auth } from '../components';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>Home Page</div>
      <Auth />
    </PageLayout>
  );
};

export default HomePage;
