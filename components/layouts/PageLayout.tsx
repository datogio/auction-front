import Head from 'next/head';
import type { ReactNode } from 'react';

interface IPageLayout {
  title: string;
  description: string;
  children: ReactNode;
}

const PageLayout = ({ title, description, children }: IPageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default PageLayout;
