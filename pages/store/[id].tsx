import { NextPage, GetServerSideProps } from 'next';
import { PageLayout } from '../../layouts';
import { API_URL } from '../../utils/urls';
import { Auction, ListingDetails, ListingDescription } from '../../components';

interface ListingDetailPageProps {
  listing: listing.Model;
}

const ListingDetailPage: NextPage<ListingDetailPageProps> = (props) => {
  return (
    <PageLayout
      pageTitle={props.listing.title}
      pageDescription={props.listing.description}
    >
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 grid grid-rows-2 gap-5">
            <ListingDescription description={props.listing.description} />
            <ListingDetails
              startingPrice={props.listing.startingPrice.toString()}
            />
          </div>
          <div className="col-span-1">
            <Auction
              listingId={props.listing._id}
              image={props.listing.image}
              initialBidAmount={props.listing.startingPrice.toString()}
            />
          </div>
        </div>
        <div></div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  ListingDetailPageProps
> = async (ctx) => {
  const listingResp = await fetch(`${API_URL}/listing/${ctx.params?.id}`);
  const { data: listing } = await listingResp.json();
  return {
    props: {
      listing,
    },
  };
};

export default ListingDetailPage;
