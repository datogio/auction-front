import { NextPage } from 'next';
import { PageLayout } from '../layouts';

const NotificationsPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle="Notifications"
      pageDescription="Notifications page description"
    >
      <div>Notifications Page</div>
    </PageLayout>
  );
};

export default NotificationsPage;
