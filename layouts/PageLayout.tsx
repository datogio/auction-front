import Head from 'next/head';

import type { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header>Header</header>

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default PageLayout;
