import { NextPage, GetServerSideProps } from 'next';
import { PageLayout } from '../../layouts';
import { API_URL } from '../../utils/urls';

interface ListingDetailPageProps {
  listing: listing.Model;
}

const ListingDetailPage: NextPage<ListingDetailPageProps> = (props) => {
  return (
    <PageLayout
      pageTitle={props.listing.title}
      pageDescription={props.listing.description}
    >
      <div>{props.listing.description}</div>
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
