import { useState, useEffect, Dispatch, ReactNode } from 'react';
import Head from 'next/head';
import {
  Auth,
  LeftAside,
  RightAside,
  Overlay,
  PromptList,
  PromptItem,
  CloseOverlay,
} from '../components';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../store/user';
import * as promptActions from '../store/prompt';
import * as categoryActions from '../store/category';

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
  const [isAddListingActive, setIsAddListingActive] = useState<boolean>(false);
  const user = useSelector(userActions.selectUser);
  const prompts = useSelector(promptActions.selectAllPrompts);

  useEffect(() => {
    user && setIsAuthActive(false);
    !user && dispatch(userActions.setUser());
    dispatch(categoryActions.setAllCategories());
  }, [dispatch, user]);

  const handleAuthActivation = () => {
    dispatch(promptActions.set([]));
    setIsAuthActive((prev) => !prev);
  };

  const handleAddListingActivation = () => {
    dispatch(promptActions.set([]));
    setIsAddListingActive((prev) => !prev);
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

        <RightAside onAddListingClick={handleAddListingActivation} />
      </div>
      <AnimatePresence>
        {isAuthActive && (
          <Overlay>
            <CloseOverlay onClick={handleAuthActivation} />
            <div className="h-[80%] flex justify-center items-center">
              <Auth />
            </div>
          </Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAddListingActive && (
          <Overlay>
            <CloseOverlay onClick={handleAddListingActivation} />
          </Overlay>
        )}
      </AnimatePresence>
      {prompts.length > 0 && (
        <PromptList>
          <AnimatePresence>
            {prompts.map((prompt) => (
              <PromptItem
                key={prompt.id}
                id={prompt.id}
                type={prompt.type}
                message={prompt.message}
              />
            ))}
          </AnimatePresence>
        </PromptList>
      )}
    </div>
  );
};

export default PageLayout;
