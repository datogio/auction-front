import { useState } from 'react';
import Head from 'next/head';
import { Auth, LeftAside, Overlay } from '../components';
import { FaTimes } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

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
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);

  const handleAuthActivation = () => {
    setIsAuthActive((prev) => !prev);
  };

  return (
    <div className="bg-gray-300 p-5 h-screen">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <div className="grid grid-cols-12 h-[100%] rounded-3xl overflow-hidden shadow-lg">
        <LeftAside onAuthButtonClick={handleAuthActivation} />

        <main className="paddings col-span-7 bg-gray-100">{children}</main>

        <aside className="paddings col-span-3 bg-white">Right Aside</aside>
      </div>
      <AnimatePresence>
        {isAuthActive && (
          <Overlay>
            <div className="flex justify-end p-5">
              <FaTimes
                className="text-white text-4xl cursor-pointer"
                onClick={handleAuthActivation}
              />
            </div>
            <div className="h-[80%] flex justify-center items-center">
              <Auth />
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageLayout;
