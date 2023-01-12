import { Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from '../layouts';
import { ListinCard } from '../components';
import * as listingActions from '../store/listing';
import * as categoryActions from '../store/category';
import { RootState } from '../store';

const StorePage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const activeCategory = useSelector(categoryActions.selectActiveCategory);
  const listings = useSelector((state: RootState) =>
    listingActions.selectListings(state, activeCategory)
  );

  useEffect(() => {
    dispatch(listingActions.setAllListings());
  }, [dispatch]);

  return (
    <PageLayout pageTitle="Store" pageDescription="Store page description">
      <div className="grid grid-cols-4 gap-5 bg-gray-100 mt-5">
        {listings.map((listing) => (
          <ListinCard
            key={listing._id}
            href="/"
            title={listing.title}
            details={listing.description}
            image={listing.image}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default StorePage;
