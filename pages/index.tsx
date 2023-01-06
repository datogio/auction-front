import { PageLayout } from '../layouts';
import { Auth, Overlay } from '../components';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout pageTitle="Home Page" pageDescription="Home page description">
      <div>Home Page</div>
      <Overlay>
        <Auth />
      </Overlay>
    </PageLayout>
  );
};

export default HomePage;
