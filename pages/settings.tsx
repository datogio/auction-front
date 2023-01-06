import { NextPage } from 'next';
import { PageLayout } from '../layouts';

const SettingsPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle="Settings"
      pageDescription="Settings page description"
    >
      <div>Settings Page</div>
    </PageLayout>
  );
};

export default SettingsPage;
