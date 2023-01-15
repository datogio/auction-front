import { useState, useEffect, Dispatch, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Auth,
  LeftAside,
  RightAside,
  Overlay,
  PromptList,
  PromptItem,
  CloseOverlay,
  AddListing,
  UserProfile,
} from '../components';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../store/user';
import * as promptActions from '../store/prompt';
import * as categoryActions from '../store/category';
import * as listingActions from '../store/listing';
import * as bidActions from '../store/bid';

interface PageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  children: ReactNode;
  listingId?: string;
}

const PageLayout = (props: PageLayoutProps) => {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const [isUserProfileAcvite, setIsUserProfileActive] =
    useState<boolean>(false);
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);
  const [isAddListingActive, setIsAddListingActive] = useState<boolean>(false);
  const user = useSelector(userActions.selectUser);
  const prompts = useSelector(promptActions.selectAllPrompts);

  useEffect(() => {
    user && setIsAuthActive(false);
    !user && dispatch(userActions.setUser());
    if (router.pathname === '/store') {
      dispatch(listingActions.setAllListings());
      dispatch(categoryActions.setAllCategories());
      dispatch(bidActions.setAllBids());
    }
    if (router.pathname.includes('/store/')) {
      dispatch(bidActions.setAllBids());
    }
  }, [dispatch, user]);

  const handleUserProfileActivation = () => {
    dispatch(promptActions.set([]));
    setIsUserProfileActive((prev) => !prev);
  };

  const handleAuthActivation = () => {
    dispatch(promptActions.set([]));
    setIsAuthActive((prev) => !prev);
  };

  const handleAddListingActivation = () => {
    dispatch(promptActions.set([]));
    setIsAddListingActive((prev) => !prev);
  };

  const handleSignOut = () => {
    setIsUserProfileActive(false);
    dispatch(userActions.signOut());
  };

  return (
    <div className="bg-gray-300 p-5 h-screen">
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
      </Head>

      <div className="grid grid-cols-12 h-[100%] rounded-3xl overflow-hidden shadow-lg">
        <LeftAside
          onAuthButtonClick={handleAuthActivation}
          activateOverlay={handleUserProfileActivation}
        />

        <main className="paddings col-span-7 bg-gray-100 overflow-y-scroll">
          <h1 className="text-3xl font-bold">{props.pageTitle}</h1>
          <div>{props.children}</div>
        </main>

        <RightAside
          onAddListingClick={handleAddListingActivation}
          listingId={props.listingId}
        />
      </div>
      <AnimatePresence>
        {isUserProfileAcvite && (
          <Overlay>
            <CloseOverlay onClick={handleUserProfileActivation} />
            <div className="overlay-child">
              <UserProfile onSignOutButtonClick={handleSignOut} />
            </div>
          </Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAuthActive && (
          <Overlay>
            <CloseOverlay onClick={handleAuthActivation} />
            <div className="overlay-child">
              <Auth />
            </div>
          </Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAddListingActive && (
          <Overlay>
            <CloseOverlay onClick={handleAddListingActivation} />
            <div className="overlay-child">
              <AddListing deactivateOverlay={handleAddListingActivation} />
            </div>
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
