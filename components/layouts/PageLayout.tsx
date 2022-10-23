import { ReactNode } from 'react';
import Head from 'next/head';

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
      {children}
    </div>
  );
};

export default PageLayout;
