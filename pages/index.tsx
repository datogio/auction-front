import { PageLayout } from '../layouts';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>Home Page</div>
    </PageLayout>
  );
};

export default HomePage;
