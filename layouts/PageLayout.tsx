import Head from 'next/head';
import { LeftAside } from '../components';

import type { ReactNode } from 'react';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
}

const PageLayout = ({
  pageTitle,
  pageDescription,
  children,
}: PageLayoutProps) => {
  return (
    <div className="bg-gray-300 p-5 h-screen">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <div className="grid grid-cols-12 h-[100%] rounded-3xl overflow-hidden shadow-lg">
        <LeftAside />

        <main className="paddings col-span-7 bg-gray-100">{children}</main>

        <aside className="paddings col-span-3 bg-white">Right Aside</aside>
      </div>
    </div>
  );
};

export default PageLayout;
