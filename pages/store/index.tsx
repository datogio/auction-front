import { Dispatch, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from '../../layouts';
import { ListingCard } from '../../components';
import * as listingActions from '../../store/listing';
import * as categoryActions from '../../store/category';
import { RootState } from '../../store';

const StorePage: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const activeCategory = useSelector(categoryActions.selectActiveCategory);
  const listings = useSelector((state: RootState) =>
    listingActions.selectListings(state, activeCategory)
  );

  useEffect(() => {
    return () => {
      dispatch(listingActions.set([]));
    };
  }, [dispatch]);

  return (
    <PageLayout pageTitle="Store" pageDescription="Store page description">
      <div className="grid grid-cols-4 gap-5 bg-gray-100 mt-10">
        {listings.map((listing) => (
          <ListingCard
            key={listing._id}
            href={`/store/${listing._id}`}
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
