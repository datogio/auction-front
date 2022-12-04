import { PageLayout } from '../layouts';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout title="Home Page" description="Home page description">
      <div>Hello World</div>
    </PageLayout>
  );
};

export default HomePage;
