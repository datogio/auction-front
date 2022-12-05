import Head from 'next/head';

import type { ReactNode } from 'react';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

const PageLayout = ({ pageTitle, pageDescription, children }: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <header>Header</header>

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default PageLayout;
