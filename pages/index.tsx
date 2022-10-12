import { PageLayout, Container } from '../components/layouts';
import { AvatarWithName } from '../components';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout title="Components" description="Home page description">
      <main>
        <Container color="BLACK" padding="SOLID">
          <Container color="GRAY" padding="MEDIUM">
            <AvatarWithName firstName="David" lastName="Giorgadze" />
          </Container>
        </Container>
      </main>
    </PageLayout>
  );
};

export default HomePage;
