import { NextPage } from 'next';
import { PageLayout } from '../layouts';

const SavedPage: NextPage = () => {
  return (
    <PageLayout pageTitle="Saved" pageDescription="Saved page description">
      <div>Saved Page</div>
    </PageLayout>
  );
};

export default SavedPage;
