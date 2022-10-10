import { PageLayout } from '../../components/layouts';
import { SignIn } from '../../components';
import type { NextPage } from 'next';

const SignInPage: NextPage = () => {
  return (
    <PageLayout
      title="FlipList | Sign In"
      description="Sign In page description"
    >
      <main>
        <SignIn />
      </main>
    </PageLayout>
  );
};

export default SignInPage;
