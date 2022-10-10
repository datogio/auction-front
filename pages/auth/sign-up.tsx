import { PageLayout } from '../../components/layouts';
import { SignUp } from '../../components';
import type { NextPage } from 'next';

const SignInPage: NextPage = () => {
  return (
    <PageLayout
      title="FlipList | Sign Up"
      description="Sign up page description"
    >
      <main>
        <SignUp />
      </main>
    </PageLayout>
  );
};

export default SignInPage;
