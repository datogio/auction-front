import { NextPage } from 'next';
import { PageLayout } from '../layouts';

const HelpPage: NextPage = () => {
  return (
    <PageLayout pageTitle="Help" pageDescription="Help page description">
      <div>Help Page</div>
    </PageLayout>
  );
};

export default HelpPage;
