import Head from 'next/head';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page description" />
      </Head>
      <main>Page Main Section</main>
    </div>
  );
};

export default HomePage;
