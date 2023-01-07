import { useState, useEffect, Dispatch, ReactNode } from 'react';
import Head from 'next/head';
import {
  Auth,
  LeftAside,
  Overlay,
  PromptList,
  PromptItem,
} from '../components';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../store/user';

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
  const dispatch: Dispatch<any> = useDispatch();
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);
  const user = useSelector(userActions.selectUser);

  useEffect(() => {
    user && setIsAuthActive(false);
    !user && dispatch(userActions.setUser());
  }, [dispatch, user]);

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
      <PromptList>
        <PromptItem type="error" message="Test error" />
        <PromptItem type="notification" message="Test notification" />
      </PromptList>
    </div>
  );
};

export default PageLayout;
