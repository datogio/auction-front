import { PageLayout } from '../components/layouts';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout title="Home Page" description="Home page description.">
      <main>Page Main Section</main>
    </PageLayout>
  );
};

export default HomePage;
