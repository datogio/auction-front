import { PageLayout } from '../components/layouts';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout title="Components" description="Home page description">
      <main>Page Main</main>
    </PageLayout>
  );
};

export default HomePage;
